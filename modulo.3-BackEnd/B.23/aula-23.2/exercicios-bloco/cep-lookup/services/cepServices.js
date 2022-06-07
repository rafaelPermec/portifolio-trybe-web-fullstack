const CEP = require('../models/cepModel');
const middlewares = require('../middlewares');

const findAdressByCep = async (searchCEP) => {
  if (middlewares.CEP_REGEX.test(searchCEP)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const cep = await CEP.getAdressByCEP(searchCEP);

  if (!cep) return { error: { code: "notFound", message: "CEP não encontrado" } };

  return cep;
}

module.exports = {
  findAdressByCep,
}