// npm install express mongoose redis node-cron nodemailer pdfkit dotenv
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import bulkInsertJob from "./cron/bulkInsertJob.js";
import reportJob from "./cron/reportJob.js";

dotenv.config();
await connectDB();
const app = express();
app.use(express.json());
app.use("/books", bookRoutes);
bulkInsertJob.start();
reportJob.start();
app.listen(process.env.PORT, () => console.log(`Server running`));
