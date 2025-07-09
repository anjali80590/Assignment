import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./redux/actions";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !genre) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      read: false,
    };

    dispatch(addBook(newBook));

 
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add a New Book</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
