const express = require('express');
const router = express.Router();

const getAll = require('../services');

router.get('/', async (_req, res) => {
    try {
        const rows = await getAll();
        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Erro interno' });
    }
})

router.post('/', async (req, res) => {
    const { descricao, dataHora, categoria, logradouro, numero, bairro, cep } = req.body;

})

module.exports = router;