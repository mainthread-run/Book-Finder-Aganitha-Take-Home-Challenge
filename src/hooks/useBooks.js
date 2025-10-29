import React from "react";
import { useState } from "react";
import { fetchBooks } from "../utils/api";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (title) => {
    if (!title.trim()) {
      setError("Please enter a book title.");
      setBooks([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchBooks(title);
      if (data.docs?.length) {
        setBooks(data.docs.slice(0, 24));
      } else {
        setError("No books found for that title.");
        setBooks([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, searchBooks };
};
