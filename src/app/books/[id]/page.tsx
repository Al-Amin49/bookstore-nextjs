import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookDetails from "@/app/components/UI/BookDetails";

type TBookDetails = {
  params: {
    id: string;
  };
};

const BookDetailsPage = async ({ params }: TBookDetails) => {
  const res = await fetch(`http://localhost:5000/books/${params.id}`);
  const book = await res.json();

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/books"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Book Listings
          </Link>
        </div>
      </section>
      <BookDetails book={book}></BookDetails>
    </>
  );
};

export default BookDetailsPage;
