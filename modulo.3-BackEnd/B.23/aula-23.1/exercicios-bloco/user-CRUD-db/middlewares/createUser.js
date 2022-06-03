const Joi = require('joi');
const rescue = require('express-rescue');
const UserModel = require('../models/Users');

const userValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = [
  (req, _res, next) => {
    const { error } = userValidation.validate(req.body);

    if (error) return next(error);

    next()
  },
  rescue(async (req, res, _next) => {
    const { firstName, lastName, email, password } = req.body;

    const postUser = await UserModel.createUser({ firstName, lastName, email, password });

    res.status(200).json(postUser);
  })

];
