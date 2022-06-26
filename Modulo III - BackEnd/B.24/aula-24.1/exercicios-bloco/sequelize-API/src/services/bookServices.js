const { Books } = require('../models');

const getAllBooks = async () => {
  const books = await Books.findAll();
  return books;
};

const getAllBooksbyId = async (id) => { };

const createBooks = async (data) => { };

const updateBooks = async () => { };

const deleteBooks = async (id) => { };

module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  updateBooks,
  deleteBooks,
};