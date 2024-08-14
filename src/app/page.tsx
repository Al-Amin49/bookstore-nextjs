import BookCard from "./components/UI/BookCard";


const HomePage = async() => {
  const res= await fetch('http://localhost:5000/books');
  const books= await res.json()
   console.log(books)
  return (
    <div className="w-[90%] mx-auto">
      <h3 className="text-3xl text-center text-green-500 mt-4 py-4">Latest Books you want</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          books.map((book)=><BookCard key={book._id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default HomePage;