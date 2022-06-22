const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/userController');

router
  .get('/', UserControllers.get)
  .post('/', UserControllers.create);

router
  .get('/:id', UserControllers.findByPk)
  .put('/:id', UserControllers.updateWhereId)
  .delete('/:id', UserControllers.deleteDestroy);

router
  .get('/search/:id', UserControllers.findOne);

module.exports = router;
