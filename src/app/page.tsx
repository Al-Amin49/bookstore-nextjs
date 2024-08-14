import fs from "fs";
import path from "path";


export default async function Home() {


  const Home=async() =>{
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = fs.readFileSync(filePath);
    const books = JSON.parse(jsonData);
    console.log(books)
    return (
   <div>
    <h2>{books.title}</h2>
   </div>
    );
  }
  
  
}
