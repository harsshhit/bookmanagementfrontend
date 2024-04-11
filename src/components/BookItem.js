import React, { useState } from "react";
import { deleteBook, updateBook } from "../services/api";

function BookItem({ book, setBooks }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    year: book.year,
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const updatedBook = await updateBook(book._id, formData);
      setBooks((prevBooks) =>
        prevBooks.map((prevBook) =>
          prevBook._id === updatedBook._id ? updatedBook : prevBook
        )
      );
      setEditMode(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteBook(book._id);
      setBooks((prevBooks) =>
        prevBooks.filter((prevBook) => prevBook._id !== book._id)
      );
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-900 rounded-md shadow-lg p-4 my-2 text-white">
      {editMode ? (
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input-field border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-indigo-500 text-lg py-2 px-3 placeholder-gray-400 mt-3 mr-2"
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="input-field border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-indigo-500 text-lg py-2 px-3 placeholder-gray-400 mt-3 mr-2"
            placeholder="Author"
          />
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="input-field border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-indigo-500 text-lg py-2 px-3 placeholder-gray-400 mt-3 mr-2"
            placeholder="Year"
          />
          <br />
          <button
            onClick={handleSave}
            className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out m-2"
          >
            Save
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xl font-bold mb-2">{book.title}</p>
          <p className="text-sm italic mb-2"> by {book.author}</p>
          <p className="text-sm mb-4">{book.year}</p>
          <button
            onClick={handleEdit}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default BookItem;
