const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (typeof book !== "object" || !book.title || !book.author || !book.year) {
      console.log("Error: Book information is incomplete or invalid.");
      return;
    }
    this.books.push(book);
    console.log(`"${book.title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title) || "Book not found.";
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      console.log(`"${this.books[index].title}" removed successfully.`);
      this.books.splice(index, 1);
    } else {
      console.log("Book not found.");
    }
  },
};


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("Total books:", library.books.length);
