const { authenticateToken } = require("../utils/JWTToken");

const authenticationMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    const payload = await authenticateToken(token);
    // if (!payload) {
    //     throw { status: 401, message: "token inválido" };
    // }

    res.locals.payload = payload;
    
    next();
}

module.exports = authenticationMiddleware;