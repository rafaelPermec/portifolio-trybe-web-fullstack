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

const getAllBooksbyId = async (id) => {
  const { id } = req.params;

  try {
    const book = await BookServices.getAllBooksbyId(id);
    res.status(201).json(book);
  } catch (error) {
    res.status(401).json(notFound);
  }
};

const createBooks = async (req, res) => {
  const { title, author, pageQuantity, available } = req.body;

  try {
    const newBook = await BookServices.createBooks({ title, author, pageQuantity, available });
    return res.status(201).json(newBook);

  } catch (error) {
    res.status(401).json(notFound);
  }
};

const updateBooks = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, available } = req.body;

  try {
    const updatedBook = await BookServices.updateBooks(id, { title, author, pageQuantity, available });
    res.status(201).json({ message: 'Book Updated!' });
  } catch (error) {
    res.status(401).json(notFound);
  }
};

const deleteBooks = async () => { };


module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  updateBooks,
  deleteBooks,
};
