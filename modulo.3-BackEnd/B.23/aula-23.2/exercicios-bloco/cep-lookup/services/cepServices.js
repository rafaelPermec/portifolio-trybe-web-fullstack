const models = require('../models/cepModel');
const middlewares = require('../middlewares');

const findAdressByCep = async (searchCEP) => {
  if (middlewares.CEP_REGEX.test(searchCEP)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const cep = await models.getAdressByCEP(searchCEP);

  if (!cep) return { error: { code: "notFound", message: "CEP não encontrado" } };

  return cep;
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
