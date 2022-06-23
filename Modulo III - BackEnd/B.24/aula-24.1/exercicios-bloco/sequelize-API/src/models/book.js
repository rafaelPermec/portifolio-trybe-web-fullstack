const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("User", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });

  return Book;
};

module.exports = Book;
