const { User } = require('../models');
const { generateJWTToken } = require('../utils/JWTToken');

const authentication = async ( { user, password }) => {
    if (!user || !password ) {
        throw { status: 401, message: "Campos faltantes." };
    }

    const student = await User.findOne({
        attributes: ['id', 'user', 'role'],
        where: { user, password }
    });

    if (!student) {
        throw { status: 401, message: 'Usuário ou senha inválido' };
    }

    // Gerar o token
    const token = generateJWTToken(JSON.stringify(student));
    return { token };

}

module.exports = {
    authentication
}