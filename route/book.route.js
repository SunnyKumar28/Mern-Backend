// import express from "express";
// import { getBook } from "../controller/book.controller.js";

// const router = express.Router();

// router.get("/", getBook);

// export default router;

// import express from 'express';
// import { getBook } from '../controller/book.controller.js';

// const router = express.Router();

// router.get('/', getBook);

// export default router;

import express from 'express';
import Book from '../models/book.model.js';

const router = express.Router();

// Route to get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add a new book
router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    publishedDate: req.body.publishedDate,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
