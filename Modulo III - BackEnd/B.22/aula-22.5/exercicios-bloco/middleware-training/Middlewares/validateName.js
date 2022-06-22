module.exports = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: `You need to add a name to the product.` });

  if (name.length < 4) return res.status(400).json({ message: `The name must have more than four letters` });

  next();
};