import Book from "../models/Book.js";
import client from "../config/redis.js";

export const bulkBooksRequest = async (req, res) => {
  const { books, userId } = req.body;
  await client.rPush(`bulk:${userId}`, JSON.stringify(books));
  res.json({ message: "Bulk insertion request queued" });
};
