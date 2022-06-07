const connection = require('./connection');
const middlewares = require('../middlewares');

const getAdressByCEP = async (searchCEP) => {
  const treatedCEP = searchCEP.replace('-', '').trim();
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';

  const foundResults = await connection.execute(query, [treatedCEP])
    .then(([row]) => (row.length ? row[0] : null));

  if (!foundResults) return null;

  return middlewares.newCEP(foundResults);
}

module.exports = {
  getAdressByCEP,
}