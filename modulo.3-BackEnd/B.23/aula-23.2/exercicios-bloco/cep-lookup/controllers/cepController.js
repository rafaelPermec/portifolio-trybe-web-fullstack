const rescue = require('express-rescue');
const services = require('../services/cepServices');

const findAdressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const adress = await services.findAdressByCep(cep);

  if (adress.error) return next(adress.error);

  return res.status(200).json(adress);
});

module.exports = {
  findAdressByCep,
}