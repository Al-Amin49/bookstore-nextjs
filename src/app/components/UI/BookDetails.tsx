"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BookDetails = ({book}) => {

  
    const router = useRouter();

    const handleDelete = async () => {
      const confirm = window.confirm('Are you sure you want to delete this book?');
  
    //   if (confirm) {
    //     await fetch(`http://localhost:5000/book/${params.id}`, {
    //       method: 'DELETE',
    //     });
    //     router.push('/books');
    //   }
    };
  

    return (
        <div>
             <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            {/* Main Content */}
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <h1 className='text-3xl font-bold mb-4'>{book.title}</h1>
                <div className='text-gray-500 mb-4'>by {book.author}</div>
                <p className='text-gray-600 mb-4'>{book.description}</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md mt-5'>
                <h3 className='text-xl font-bold mb-6'>Book Info</h3>
                <p className='mb-4'>Category: {book.category}</p>
                <p className='mb-4'>Price: ${book.price}</p>
                <p className='mb-4'>Published Date: {book.published_date}</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
            <div >
              <Image src={book.cover_image} alt="" width={500} height={500}/>
              </div>

              {/* <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Book</h3>
                <Link
                  href={`/edit-book/${book._id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Book
                </Link>
                <button
                  onClick={handleDelete}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Book
                </button>
              </div> */}
            </aside>
          </div>
        </div>
      </section>
        </div>
    );
};

export default BookDetails;