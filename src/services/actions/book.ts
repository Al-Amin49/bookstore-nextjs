"use server";

export const addBook = async (formData:FormData) => {
  const res = await fetch(
    `http://localhost:5000/book`,
    {
      method: "POST",
      body:formData ,
      cache: "no-store",
    }
  );

  const book = await res.json();
  return book;
};