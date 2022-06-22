const axios = require('axios');

const lookupCEP = async (searchCEP) => {
  const res = await axios.get(`https://viacep.com.br/ws/${searchCEP}/json/`);

  if (!res.data) return null;

  return res.data;
};

module.exports = {
  lookupCEP,
};
