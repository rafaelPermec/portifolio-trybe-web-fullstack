const CEP = require('../models/cepModel');
const middlewares = require('../middlewares');

const findAdressByCep = async (searchCEP) => {
  if (middlewares.CEP_REGEX.test(searchCEP)) {
    return { error: { code: 'invalidData', message: 'CEP invalido' } };
  }

  const cep = await CEP.getAdressByCEP(searchCEP);

  if (!cep) return { error: { code: 'invalidData', message: 'CEP invalido' } };

  return cep;
}

module.exports = {
  findAdressByCep,
}