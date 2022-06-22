module.exports = (req, res, next) => {
  const { info: { salesDate } } = req.body;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!salesDate) return res.status(400).json({ messagem: 'salesData is a required field' });

  if (!dateRegex.test(salesDate)) return res.status(400).json({ messagem: 'incorrect date in salesDate info' });

  next();
};