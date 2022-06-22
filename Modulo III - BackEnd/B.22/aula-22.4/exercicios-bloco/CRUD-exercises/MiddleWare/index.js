// 8. Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization.
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' }.

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || authorization.length !== 16){
      return res.status(401).json({ message: 'Token inválido!' });
    }
    return next();

  } catch (err) {
    return res.status(500).end();
  }
}