const rescue = require('express-rescue');
const services = require('../services/cepServices');
const Joi = require('joi');

const findAdressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const adress = await services.findAdressByCep(cep);

  if (adress.error) return next(adress.error);

  return res.status(200).json(adress);
});

const create = rescue(async (req, res, next) => {
  const nonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: nonEmptyString.regex(/\d{5}-\d{3}/),
    logradouro: nonEmptyString,
    bairro: nonEmptyString,
    localidade: nonEmptyString,
    uf: nonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCEP = await services.create(req.body);

  if (newCEP.error) return next(newCEP.error);

  return res.status(201).json(newCEP);
});

module.exports = {
  findAdressByCep,
  create,
}