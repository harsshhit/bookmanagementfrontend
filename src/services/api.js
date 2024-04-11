import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Adjust the base URL as per your backend setup

export const getBooks = () => {
  return axios.get(`${BASE_URL}/books`);
};

export const addBook = (bookData) => {
  return axios.post(`${BASE_URL}/books`, bookData);
};

export const deleteBook = (bookId) => {
  return axios.delete(`${BASE_URL}/books/${bookId}`);
};
export const updateBook = async (bookId, updatedData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/books/${bookId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error updating book: ${error.message}`);
  }
};
