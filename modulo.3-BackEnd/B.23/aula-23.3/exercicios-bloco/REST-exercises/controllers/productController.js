const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'Informações do produto inválidas' });

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.getById(id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  await ProductModel.exclude(id);

  res.status(204).json({ message: 'Produto removido.' });
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;
