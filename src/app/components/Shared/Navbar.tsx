import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex  items-center justify-around mx-2  bg-black text-white">
            <h1 className="text-2xl font-medium text-green-500">Book Store</h1>
            <nav className="space-x-5">
                <Link href="/">Home</Link>
                <Link href="/books">Books</Link>
                <Link href="/addbook">Add Book</Link>
            </nav>
        </div>
    );
};

export default Navbar;