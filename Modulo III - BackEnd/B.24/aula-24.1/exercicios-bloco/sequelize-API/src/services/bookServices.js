const { Books } = require('../models');

const getAllBooks = async () => {
  const books = await Books.findAll({ order: [['title', 'ASC']] });
  return books;
};

const getAllBooksbyId = async (id) => {
  const book = await Books.findByPk(id);
  return book;
};

const createBooks = async ({ title, author, pageQuantity, available, publisher }) => {
  const newBook = Books.create({ title, author, pageQuantity, available, publisher });
  return newBook;
};

const updateBooks = async (id, { title, author, pageQuantity, available }) => {
  const [updated] = await Books
    .update({ title, author, pageQuantity, available, publisher }, { where: { id } });
  return updated;
};

const deleteBooks = async (id) => {
  const removedBook = await Books.destroy({ where: { id } });
  return removedBook;
};

const getByAuthor = async (author) => {
  const bookByAuthor = await Books.findAll({ where: { author }, order: [['title', 'ASC']] });
  return bookByAuthor;
};

module.exports = {
  getAllBooks,
  getAllBooksbyId,
  createBooks,
  updateBooks,
  deleteBooks,
  getByAuthor,
};