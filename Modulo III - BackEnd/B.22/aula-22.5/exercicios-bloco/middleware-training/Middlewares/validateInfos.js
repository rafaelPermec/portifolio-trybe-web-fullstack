module.exports = (req, res, next) => {
  const { info } = req.body;
  if (!info) return res.status(400).json({ messagem: 'info is a required field' });

  next();
};