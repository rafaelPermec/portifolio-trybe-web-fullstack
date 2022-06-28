const express = require('express');
const { getPlans } = require('../services/plan.services');
const router = express.Router();


router.get('/', async (req, res) => {
    const plans = await getPlans();
    res.status(200).json(plans);
})

module.exports = router;