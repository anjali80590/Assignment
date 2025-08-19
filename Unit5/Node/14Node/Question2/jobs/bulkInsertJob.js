const cron = require("node-cron");
const client = require("../config/redis");
const Book = require("../models/bookModel");

cron.schedule("*/2 * * * *", async () => {
  const keys = await client.keys("bulk:*");
  for (let k of keys) {
    const books = JSON.parse(await client.get(k));
    const userId = k.split(":")[1];
    await Book.insertMany(books.map((b) => ({ ...b, userId })));
    await client.del(k);
  }
});
