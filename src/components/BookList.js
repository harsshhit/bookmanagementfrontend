import React from "react";
import BookItem from "./BookItem";

function BookList({ books, setBooks }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300">
        Books List
      </h2>
      {books.map((book) => (
        <BookItem key={book._id} book={book} setBooks={setBooks} />
      ))}
    </div>
  );
}

export default BookList;
