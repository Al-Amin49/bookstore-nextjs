"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <>
    <div className="bg-black text-white p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium text-green-500">Book Store</h1>
        <div className="md:hidden">
          {/* Toggle button for mobile view */}
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Navigation links for larger screens */}
        <nav className="space-x-5 hidden md:block">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/addbook">Add Book</Link>
        </nav>
      </div>
     
    </div>
     {/* Navigation links for mobile view */}
     {isOpen && (
        <nav className=" space-y-3 md:hidden flex flex-col bg-black text-white w-fit rounded-md p-5 absolute right-0 top-20 z-10">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/books" onClick={toggleMenu}>Books</Link>
          <Link href="/addbook" onClick={toggleMenu}>Add Book</Link>
        </nav>
      )}
   </>
  );
};

export default Navbar;
