const express = require('express');
const BookServices = require('../services/bookServices');

const getAllBooks = async (_req, res) => {
  const books = await BookServices.getAllBooks();
  res.status(200).json(books);
};

const getAllBooksbyId = async (id) => { };

const createBooks = async (req, res) => {
  const data = req.body;
  const newBook = await BookServices.createBooks(data);
  return res.status(201).json(newBook);
};

const postBooks = async () => { };

const deleteBooks = async () => { };


module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  postBooks,
  deleteBooks,
};
