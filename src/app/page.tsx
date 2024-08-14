import fs from "fs";
import path from "path";


export default async function Home() {


  const Home=async() =>{
   const res= await fetch('http://localhost:5000/books');
   const books= await res.json()
    console.log(books)
    return (
   <div>
  
   </div>
    );
  }
  
  
}
