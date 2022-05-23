const serialize = (data) => ({
  descricao: data.descricao,
  dataHora: data.data_hora,
  categoria: data.categoria,
  endereco: {
    logradouro: data.logradouro,
    numero: data.numero,
    bairro: data.bairro,
    cep: data.cep
  }
});

module.exports = { serialize };
