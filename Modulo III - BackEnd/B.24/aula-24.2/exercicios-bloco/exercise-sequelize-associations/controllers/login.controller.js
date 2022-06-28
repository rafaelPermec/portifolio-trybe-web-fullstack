const express = require('express');
const authRouter = express.Router();
const loginService = require('../services/login.service');

authRouter.post('/', async (req, res, next) => {
    const token = await loginService.authentication(req.body);
    res.status(200).json(token);
})

module.exports = authRouter;