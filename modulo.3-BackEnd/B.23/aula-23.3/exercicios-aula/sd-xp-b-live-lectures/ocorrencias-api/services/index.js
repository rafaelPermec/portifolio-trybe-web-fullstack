const getAllAdress = require('../models');
const joi = require('joi');

const getAll = async () => await getAllAdress();

const validator = joi.object().keys({
  descricao: joi.string().required(),
  data_hora: joi.date().validate('YYYY-MM-DD HH:MM'),
  categoria: joi.string().required(),
  logradouro: joi.string().required(),
  numero: joi.number().required(),
  bairro: joi.string().required(),
  cep: joi.number().required(),
})

module.exports = getAll;
