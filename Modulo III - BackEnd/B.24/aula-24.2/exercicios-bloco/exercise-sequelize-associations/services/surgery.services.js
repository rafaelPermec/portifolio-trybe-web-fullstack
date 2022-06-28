const { Plan, Patient, Surgery } = require('../models');

const getSurgeries = (name) => {
    return Surgery.findAll({
        where: { doctor: name }
});
}

module.exports = {
    getSurgeries
}