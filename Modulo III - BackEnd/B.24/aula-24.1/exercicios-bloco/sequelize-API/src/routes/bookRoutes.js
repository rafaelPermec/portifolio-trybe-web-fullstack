const express = require('express');
const router = express.Router();

const bookControllers = require('../controllers/bookControllers');

router
  .get('/', bookControllers.getAllBooks)
  .post('/', bookControllers.postBooks);

router
  .get('/:id', bookControllers.getAllBooksbyId)
  .put('/:id', bookControllers.updateBooks)
  .delete('/:id', bookControllers.deleteBooks);

module.exports = router;