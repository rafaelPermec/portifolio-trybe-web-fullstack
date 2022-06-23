const express = require('express');
const router = express.Router();

const bookControllers = require('../controllers/bookControllers');

router.get('/');

router.get('/:id');

module.exports = router;