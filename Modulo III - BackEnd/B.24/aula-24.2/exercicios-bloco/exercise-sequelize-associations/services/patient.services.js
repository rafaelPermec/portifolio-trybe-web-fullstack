const { Patient, Plan, Surgery } = require('../models');

const getPatientsWithPlan = () => {
    return Patient.findAll(
        {
            attributes: { exclude: ['plan_id'] },
            include: [
                { model: Plan, as: 'plan'}
            ]
        }
    );
}

const getPatientsWithSurgery = () => {
    return Patient.findAll(
        {
            attributes: { exclude: ['plan_id'] },
            include: [
                { model: Surgery, as: 'surgeries'}
            ]
        }
    );
}

const getPatientByPlan = (planId) => {
    return Patient.findAll({
        where: {plan_id: planId },
    });
}

const getPatientsNoDoctor = () => {
    return Patient.findAll(
        {
            attributes: { exclude: ['plan_id'] },
            include: [
                {
                     model: Surgery, as: 'surgeries',
                    attributes: { exclude: ['doctor'] }
                } 
            ]
        }
    );
}

const createPatient = ({
    fullname,
    planId
}) => {
    return Patient.create({
        fullname,
        plan_id: planId
    });
}

module.exports = {
    getPatientsWithPlan,
    getPatientsWithSurgery,
    getPatientByPlan,
    getPatientsNoDoctor,
    createPatient
}