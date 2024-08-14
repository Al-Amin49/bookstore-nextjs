
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
dotenv.config()
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ikm0tqz.mongodb.net`

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
});

async function run() {
  try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      const bookCollection = client.db('boostore').collection('books');

      app.get('/books', async (req, res) => {
          const cursor = bookCollection.find();
          const result = await cursor.toArray();
          res.send(result);
      })

      app.get('/books/:id', async (req, res) => {
        const id = req.params.id;
    
        // Validate the ID
        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid book ID' });
        }
    
        const query = { _id: new ObjectId(id) };
        const result = await bookCollection.findOne(query);
    
        if (result) {
            res.send(result);
        } else {
            res.status(404).send({ error: 'Book not found' });
        }
    });

      app.post('/book', async (req, res) => {
          const newCoffee = req.body;
          console.log(newCoffee);
          const result = await bookCollection.insertOne(newCoffee);
          res.send(result);
      })

      app.put('/book/:id', async(req, res) => {
          const id = req.params.id;
          const filter = {_id: new ObjectId(id)}
          const options = { upsert: true };
          const updatedBook = req.body;

          const book = {
              $set: {
                  name: updatedBook.name, 
                  quantity: updatedBook.quantity, 
                  supplier: updatedBook.supplier, 
                  taste: updatedBook.taste, 
                  category: updatedBook.category, 
                  details: updatedBook.details, 
                  photo: updatedBook.photo
              }
          }

          const result = await bookCollection.updateOne(filter, book, options);
          res.send(result);
      })

      app.delete('/book/:id', async (req, res) => {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) }
          const result = await bookCollection.deleteOne(query);
          res.send(result);
      })


      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})