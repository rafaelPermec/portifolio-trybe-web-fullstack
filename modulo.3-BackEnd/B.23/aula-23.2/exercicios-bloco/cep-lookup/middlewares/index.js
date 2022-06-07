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

const error = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({
      error: { message: err.details[0].message }
    });
  } if (err.code) {
    const errorCode = { notFound: 404 };
    const status = errorCode[err.code] || 500;

    res.status(status).json(err);
  }

  console.log(err);

  return res.status(500).json({ error: { code: 'internal', message: 'Internal Server Error' } });
}

module.exports = {
  CEP_REGEX,
  NEW_CEP_REGEX,
  serializeCEP,
  newCEP,
  error,
}
