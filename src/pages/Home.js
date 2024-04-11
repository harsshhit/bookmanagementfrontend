// src/pages/Home.js
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { getBooks } from "../services/api";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className=" max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Book Management System
      </h1>
      <div>
        <BookForm fetchBooks={fetchBooks} />
      </div>
      <div className="mb-8">
        <BookList books={books} setBooks={setBooks} />
      </div>
    </div>
  );
}

export default Home;
