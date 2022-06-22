module.exports = (req, res, next) => {
  const { data: { warranty } } = req.body;

  if (!warranty || warranty === 0) return res.status(400).json({ messagem: 'warranty is a required field' });

  if (warranty < 1 || warranty > 3) return res.status(400).json({ messagem: 'the period is between 1 and 3 years' });

  next();
};
