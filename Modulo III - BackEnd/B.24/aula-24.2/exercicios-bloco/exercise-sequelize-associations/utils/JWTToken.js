const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || "akldhkjladadhjksvdhj";
// https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
const jwtConfig = {
    // expiresIn: '15m',
    algorithm: 'HS256',
}

const generateJWTToken = (payload) => 
    jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        throw { status: 401, message: "Sem Token" };
    }

    try{
        const introspection = await jwt.verify(token, SECRET, jwtConfig);
        return introspection;
    } catch (e) {
        console.log("error", e.message)
        throw { status: 401, message: "token inválido" };
    }

}

module.exports = {
    generateJWTToken,
    authenticateToken
}