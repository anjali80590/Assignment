class Book {
  constructor(title, author, reviews = []) {
    this.title = title;
    this.author = author;
    this.reviews = [...reviews]; 
  }

  clone() {
    return new Book(this.title, this.author, [...this.reviews]);
  }

  addReview(review) {
    this.reviews.push(review);
  }

  getDetails() {
    return `Book: "${this.title}" by ${this.author}
Reviews: [${this.reviews.join(", ")}]`;
  }
}


 function main() {

  const originalBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", [
    "Great book!",
    "Classic",
  ]);
  console.log("Original Book:");
  console.log(originalBook.getDetails());


  const clonedBook = originalBook.clone();
  console.log("\nCloned Book (before modification):");
  console.log(clonedBook.getDetails());


  originalBook.addReview("Amazing story!");


  clonedBook.addReview("Loved the characters!");

  console.log("\nAfter modifications:");
  console.log("Original Book:");
  console.log(originalBook.getDetails());
  console.log("\nCloned Book:");
  console.log(clonedBook.getDetails());

  console.log(
    "\nAre reviews arrays the same?",
    originalBook.reviews === clonedBook.reviews
  );
  console.log("Original reviews:", originalBook.reviews);
  console.log("Cloned reviews:", clonedBook.reviews);
}

main();
