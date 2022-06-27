const express = require('express');
const BookServices = require('../services/bookServices');

const notFound = { message: 'Book not found in database.' };

const getAllBooks = async (_req, res) => {
  try {
    const books = await BookServices.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(401).json(notFound);
  }
};

const getAllBooksbyId = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await BookServices.getAllBooksbyId(id);
    res.status(201).json(book);
  } catch (error) {
    res.status(401).json(notFound);
  }
};

const createBooks = async (req, res) => {
  const { title, author, pageQuantity, available, publisher } = req.body;

  try {
    const newBook = await BookServices.createBooks({ title, author, pageQuantity, available, publisher });
    return res.status(201).json(newBook);

  } catch (error) {
    res.status(401).json(notFound);
  }
};

const updateBooks = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, available, publisher } = req.body;

  try {
    await BookServices.updateBooks(id, { title, author, pageQuantity, available, publisher });
    res.status(201).json({ message: 'Book Updated!' });
  } catch (error) {
    res.status(401).json(notFound);
  }
};

const deleteBooks = async (req, res) => {
  const { id } = req.body;

  try {
    await BookServices.deleteBooks(id);
    res.status(201).json({ message: 'Book removed successfully!' });
  } catch (error) {
    res.status(401).json(notFound);
  }
};

const getByAuthor = async (req, res) => {
  const { author } = req.query;

  try {
    const bookByAuthor = await BookServices.getByAuthor(author);
    res.status(201).json(bookByAuthor);
  } catch (error) {
    res.status(401).json(notFound);
  }
};


module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  updateBooks,
  deleteBooks,
  getByAuthor,
};
