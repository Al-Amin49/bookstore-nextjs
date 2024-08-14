"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TBook } from "@/types";

type TBookDetailsProps={
  book:TBook
}

const BookCards = ({ book }:TBookDetailsProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const router=useRouter();
  // Function to toggle the description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const goToDetailsPage=()=>{
    router.push(`/books/${book._id}`);
  }
  // Limit the number of words shown in the truncated description
  const truncateText = (text:string, wordLimit:number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col my-10">
      <div className="relative">
        <Image
          src={book.cover_image}
          alt={book.title}
          className="w-full h-64 object-cover"
          width={500}
          height={500}
        />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          {book.category}
        </div>
        <div className="text-xs absolute top-0 left-5 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          ${book.price}
        </div>
      </div>

      <div className="px-6 pt-4 mb-auto">
        <div className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
          {book.title}
        </div>
        <p className="text-gray-700 mb-2 font-medium">by {book.author}</p>
        <p className="text-gray-600 mb-4">
          {showFullDescription
            ? book.description
            : truncateText(book.description, 15)}
          <button
            className="text-indigo-600 hover:underline ml-2"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Show less" : "Read more"}
          </button>
        </p>
       
      </div>
      <button onClick={goToDetailsPage} className="bg-green-500 px-4 py-2 rounded-md w-[60%] mx-auto text-white mb-4">
        View Details
      </button>
    </div>
  );
};

export default BookCards;
