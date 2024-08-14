import Image from 'next/image';

const BookCard = ({ book }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <a href="#">
        <div className="relative">
          <Image
            src={book.cover_image}
            alt={book.title}
            className="w-full h-64 object-cover"
            width={500}
            height={500}
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {book.category}
            </div>
          </a>
        </div>
      </a>
      <div className="px-6 py-4 mb-auto">
        <a href="#" className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
          {book.title}
        </a>
        <p className="text-gray-700 mb-2">by {book.author}</p>
        <p className="text-gray-600 mb-4">{book.description}</p>
      </div>
    
    </div>
  );
};

export default BookCard;
