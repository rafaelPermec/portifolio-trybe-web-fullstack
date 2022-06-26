const express = require('express');
const BookServices = require('../services/bookServices');

const createBooks = async (req, res) => {
  const data = req.body;
  const newBook = await BookServices.createBooks(data)
  return res.status(201).json(newBook);
};
