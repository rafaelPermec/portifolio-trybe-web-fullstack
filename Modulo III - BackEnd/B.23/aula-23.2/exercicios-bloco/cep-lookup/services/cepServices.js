const models = require('../models/cepModel');
const viaCep = require('../models/axiosCepModel');

const findAdressByCep = async (searchCEP) => {
  const dbCep = await models.getAdressByCEP(searchCEP);

  if (dbCep) return dbCep;

  const cepFromAPI = await viaCep.lookupCEP(searchCEP);

  if (!cepFromAPI) return { error: { code: "notFound", message: "CEP não encontrado" } };

  return models.create(cepFromAPI);
}

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const uniqueCEP = await models.getAdressByCEP(cep);
  if (uniqueCEP) return { error: { code: "alreadyExists", message: "CEP já existente" } };

  return models.create({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  findAdressByCep,
  create,
}
