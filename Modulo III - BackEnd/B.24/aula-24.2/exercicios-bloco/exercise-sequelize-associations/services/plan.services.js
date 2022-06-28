const { Plan, Patient, Surgery } = require('../models');

const getPlans = () => {
    return Plan.findAll(
        {
            include: [
                { model: Patient, as: 'patients'}
            ]
        }
    );
}

module.exports = {
    getPlans
}