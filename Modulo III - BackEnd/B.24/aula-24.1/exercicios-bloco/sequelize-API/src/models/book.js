const Bookschema = (sequelize, DataTypes) => {
  const BooksTable = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    publisher: DataTypes.STRING,
  });

  return BooksTable;
};

module.exports = Bookschema;
