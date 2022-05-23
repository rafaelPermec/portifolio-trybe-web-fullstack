const connection = require('../database/Connection');
const { serialize } = require('../helpers');

const getAllAdress = async () => {
  const QUERY = `SELECT o.descricao, o.data_hora, o.categoria, e.logradouro, e.numero, e.bairro, e.cep 
  FROM endereco AS e
  INNER JOIN ocorrencias AS o
  ON e.id_endereco = o.id_endereco; `;

  const [response] = await connection.execute(QUERY);
  console.log(response);
  return response.map(serialize);
}

module.exports = getAllAdress;
