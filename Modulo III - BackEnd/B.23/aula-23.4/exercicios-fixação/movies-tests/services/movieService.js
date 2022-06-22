const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') {
    return false;
  } else if (!releaseYear || typeof releaseYear !== 'number') {
    return false;
  } else if (!directedBy || typeof directedBy !== 'string') {
    return false;
  } else {
    return true;
  };

};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return { id };
};

module.exports = {
  create,
};
