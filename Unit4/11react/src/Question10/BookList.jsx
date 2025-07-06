import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

function BookList() {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);

  // Apply filters
  const filteredBooks = books.filter((book) => {
    const genreMatch = filters.genre ? book.genre === filters.genre : true;
    const authorMatch = filters.author ? book.author === filters.author : true;
    const statusMatch = filters.status
      ? filters.status === "read"
        ? book.read
        : !book.read
      : true;

    return genreMatch && authorMatch && statusMatch;
  });

  return (
    <div>
      <h3>Book List</h3>
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
      )}
    </div>
  );
}

export default BookList;
