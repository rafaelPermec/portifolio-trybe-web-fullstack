const { Books } = require('../models');

const getAllBooks = async () => {
  const books = await Books.findAll();
  return books;
};

const getAllBooksbyId = async (id) => {
  const book = await Books.findByPk(id);
  return book;
};

const createBooks = async ({ title, author, pageQuantity, available }) => {
  const newBook = Books.create({ title, author, pageQuantity, available });
  return newBook;
};

const updateBooks = async (id, { title, author, pageQuantity, available }) => {
  const [updated] = await Books
    .update({ title, author, pageQuantity, available }, { where: { id } });
  return updated;
};

const deleteBooks = async (id) => { };

module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  updateBooks,
  deleteBooks,
};