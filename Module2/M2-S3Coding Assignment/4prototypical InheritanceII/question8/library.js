
function Book(title, author, isAvailable = true) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;
}


function Member(name, borrowedBooks = []) {
  this.name = name;
  this.borrowedBooks = borrowedBooks;
  this.maxBooks = 3; 
}


Member.prototype.borrowBook = function (book) {
  if (!book.isAvailable) {
    console.log(`Sorry, "${book.title}" is already borrowed.`);
    return false;
  }

  if (this.borrowedBooks.length >= this.maxBooks) {
    console.log(`Borrowing limit reached (${this.maxBooks} books).`);
    return false;
  }

  book.isAvailable = false;
  this.borrowedBooks.push(book.title);
  console.log(`${this.name} borrowed "${book.title}"`);
  return true;
};


function PremiumMember(name, borrowedBooks = []) {
  Member.call(this, name, borrowedBooks);
  this.specialCollectionAccess = true;
  this.maxBooks = 5; 
}


PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;


PremiumMember.prototype.borrowBook = function (book, isSpecial = false) {
  if (isSpecial && !this.specialCollectionAccess) {
    console.log(
      "Access denied. Special collection requires premium membership."
    );
    return false;
  }


  return Member.prototype.borrowBook.apply(this, [book]);
};

export { Book, Member, PremiumMember };
