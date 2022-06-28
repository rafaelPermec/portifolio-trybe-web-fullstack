const express = require('express');
const { getSurgeries } = require('../services/surgery.services');

const router = express.Router();


router.get('/:name', async (req, res) => {
    const { name } = req.params;
    const surgeries = await getSurgeries(name);
    res.status(200).json(surgeries);
})

module.exports = router;