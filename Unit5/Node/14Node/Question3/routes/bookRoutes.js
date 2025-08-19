import express from "express";
import { bulkBooksRequest } from "../controllers/bookController.js";
const router = express.Router();
router.post("/bulk", bulkBooksRequest);
export default router;
