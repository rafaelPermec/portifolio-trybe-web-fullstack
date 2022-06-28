const express = require('express');
const authenticationMiddleware = require('../middlewares/auth.middleware');
const { getPatientsWithPlan, 
        getPatientsWithSurgery, 
        getPatientByPlan, 
        getPatientsNoDoctor,
        createPatient
    } = require('../services/patient.services');

const router = express.Router();

router.get('/', async (req, res) => {
    const patients = await getPatientsNoDoctor();
    res.status(200).json(patients);
})

router.get('/plan', authenticationMiddleware, async (req, res) => {
    const patients = await getPatientsWithPlan();
    res.status(200).json(patients);
})

router.get('/surgery', async (req, res) => {
    const patients = await getPatientsWithSurgery();
    res.status(200).json(patients);
})

router.get('/plan/:id', async (req, res) => {
    const { id } = req.params;
    const plans = await getPatientByPlan(id);
    res.status(200).json(plans);
})

router.post('/', async (req, res) => {
    const patient = await createPatient(req.body);
    res.status(200).json(patient);
})

module.exports = router;