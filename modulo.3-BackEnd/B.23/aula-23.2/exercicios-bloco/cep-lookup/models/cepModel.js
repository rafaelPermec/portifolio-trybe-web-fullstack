const connection = require('./connection');
const middlewares = require('../middlewares');

const getAdressByCEP = async (searchCEP) => {
  const treatedCEP = searchCEP.replace('-', '').trim();
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;';

  const foundResults = await connection.execute(query, [treatedCEP])
    .then(([row]) => (row.length ? row[0] : null));

  if (!foundResults) return null;

  return middlewares.newCEP(foundResults);
}

const create = async ({ cep: rawCEP, logradouro, bairro, localidade, uf }) => {
  const newCep = rawCEP.replace('-', '').trim();

  const query = `
  INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf )
  VALUES (?, ?, ?, ?, ?);`

  await connection.execute(query, [newCep, logradouro, bairro, localidade, uf]);

  return { newCep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getAdressByCEP,
  create,
}