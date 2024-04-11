import React, { useState } from "react";
import { addBook } from "../services/api";

function BookForm({ fetchBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addBook({ title, author, year });
      fetchBooks(); 
      setTitle(""); 
      setAuthor("");
      setYear("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-black to-blue-900 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">Add New Book</h2>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring focus:ring-blue-500"
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring focus:ring-blue-500"
        placeholder="Author"
        required
      />
      <input
        type="number"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring focus:ring-blue-500"
        placeholder="Year"
        required
      />
      <button
        type="submit"
        className=" bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
