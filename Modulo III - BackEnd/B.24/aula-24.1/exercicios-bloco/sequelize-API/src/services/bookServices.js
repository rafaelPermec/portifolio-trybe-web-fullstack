const { Book } = require('../models');

const getAllBooks = async () => {
  const books = await Book.findAll({ order: [['title', 'ASC']] });
  return books;
};

const getAllBooksbyId = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBooks = async ({ title, author, pageQuantity, available, publisher }) => {
  const newBook = Book.create({ title, author, pageQuantity, available, publisher });
  return newBook;
};

const updateBooks = async (id, { title, author, pageQuantity, available, publisher }) => {
  const [updated] = await Book
    .update({ title, author, pageQuantity, available, publisher }, { where: { id } });
  return updated;
};

const deleteBooks = async (id) => {
  const removedBook = await Book.destroy({ where: { id } });
  return removedBook;
};

const getByAuthor = async (author) => {
  const bookByAuthor = await Book.findAll({ where: { author }, order: [['title', 'ASC']] });
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