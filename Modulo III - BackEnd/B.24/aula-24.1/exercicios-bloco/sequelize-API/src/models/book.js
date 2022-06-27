const Bookschema = (sequelize, DataTypes) => {
  const BooksTable = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });

  return BooksTable;
};

module.exports = Bookschema;
