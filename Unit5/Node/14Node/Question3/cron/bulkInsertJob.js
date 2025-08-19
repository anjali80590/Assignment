import cron from "cron";
import client from "../config/redis.js";
import Book from "../models/Book.js";

export default new cron.CronJob("*/2 * * * * *", async () => {
  const keys = await client.keys("bulk:*");
  for (let key of keys) {
    const userId = key.split(":")[1];
    const booksData = await client.lPop(key);
    if (!booksData) continue;
    const books = JSON.parse(booksData);
    let success = 0,
      fail = 0;
    for (let b of books) {
      try {
        await Book.create({ ...b, userId });
        success++;
      } catch {
        fail++;
      }
    }
    await client.set(
      `status:${userId}`,
      JSON.stringify({
        userId,
        success,
        fail,
        timestamp: new Date().toISOString(),
      })
    );
  }
});
