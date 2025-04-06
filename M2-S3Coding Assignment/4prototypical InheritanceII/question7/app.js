// Import book collection from books module
import { books } from "./books.js";

// Generate summaries using map and prototype method
const summaries = books.map((book) => book.getSummary());


console.log(summaries);
