import Link from "next/link";


const Navbar = () => {
    return (
        <div className="flex  items-center justify-around m-2 ">
            <h1 className="text-2xl font-medium text-green-500">Book Store</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/books">Books</Link>
                <Link href="/addbook">Add Book</Link>
            </nav>
        </div>
    );
};

export default Navbar;