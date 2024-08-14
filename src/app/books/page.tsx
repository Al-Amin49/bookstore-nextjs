import BookCard from "../components/UI/BookCard";



const BooksPage = async() => {
  const res= await fetch('http://localhost:5000/books', {
    cache:'no-store'
  });
  const books= await res.json()
  return (
    <div className="w-[90%] mx-auto">
      <h3 className="text-3xl text-center text-green-500 mt-4 py-4">All Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          books.map((book)=><BookCard key={book._id} book={book}></BookCard>)
        }
      </div>
    <div className="text-center">

    </div>
    </div>
  );
};

export default BooksPage;