const rescue = require('express-rescue');
const UserModel = require('../models/Users');

module.exports = rescue(async (_req, res) => res.status(200).json(await UserModel.getUser()));
