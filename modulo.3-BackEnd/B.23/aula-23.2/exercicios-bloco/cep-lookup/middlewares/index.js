const CEP_REGEX = /\d{5}-\d{3}/;
const NEW_CEP_REGEX = /(\d{5})(\d{3})/;

const serializeCEP = (cep) => {

  if (CEP_REGEX.text(cep)) return cep;

  return cep.replace(NEW_CEP_REGEX, '$1-$2');
};

const newCEP = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: serializeCEP(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

module.exports = {
  CEP_REGEX,
  NEW_CEP_REGEX,
  serializeCEP,
  newCEP,
}
