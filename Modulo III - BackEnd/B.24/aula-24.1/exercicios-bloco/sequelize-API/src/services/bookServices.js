const { Books } = require('../models');

const getAllBooks = async () => {
  const books = await Books.findAll();
  return books;
};

const getAllBooksbyId = async (id) => { };

const createBooks = async () => { };

const postBooks = async () => { };

const deleteBooks = async () => { };

module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  postBooks,
  deleteBooks,
};