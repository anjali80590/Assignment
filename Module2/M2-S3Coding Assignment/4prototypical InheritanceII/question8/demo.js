import { Book, Member, PremiumMember } from "./library.js";

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");
const specialBook = new Book("Rare Manuscript", "Ancient Author");


const regularMember = new Member("John Doe");
const premiumMember = new PremiumMember("Jane Smith");

regularMember.borrowBook(book1);
regularMember.borrowBook(specialBook); 

premiumMember.borrowBook(specialBook, true); 
const borrowForJohn = regularMember.borrowBook.bind(regularMember);
borrowForJohn(new Book("New Book", "New Author")); 