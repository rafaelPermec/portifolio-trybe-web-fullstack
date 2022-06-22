module.exports = (req, res, next) => {
  const { auth } = req.headers;
  try {
    if (!auth || auth.length !== 16) return res.status(401).json({ message: `Invalid Token` });
    return next();
  } catch (err) {
    return res.status(500).end()
  }
}