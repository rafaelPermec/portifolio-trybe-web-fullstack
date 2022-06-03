const rescue = require('express-rescue');
const UserModel = require('../models/Users');

module.exports = [
  (req, _res, next) => {
    const { error } = UserModel.isValid(req.body);
    if (error) return next(error);
    next();
  },
  rescue(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const updateUser = await UserModel.updateUser(id, { firstName, lastName, email, password });

    if (!updateUser) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

    return res.status(200).json(updateUser);
  }),
];
