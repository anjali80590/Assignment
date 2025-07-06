import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook,toggleRead } from "./redux/actions";

function BookItem({ book }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: book.read ? "#e6ffe6" : "#ffe6e6",
      }}
    >
      <h4>{book.title}</h4>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Status:</strong> {book.read ? "Read ✅" : "Unread ❌"}
      </p>

      <button onClick={() => dispatch(toggleRead(book.id))}>
        Mark as {book.read ? "Unread" : "Read"}
      </button>

      <button
        onClick={() => dispatch(deleteBook(book.id))}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default BookItem;
