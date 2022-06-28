const PatientSurgerySchema = (sequelize, DataTypes) => {
    const PatientSurgeryTable = sequelize.define('PatientSurgery', {
        patient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        surgery_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, { timestamps: false, tableName: "Patient_surgeries" });

    PatientSurgeryTable.associate = (models) => {

        models.Patient.belongsToMany(models.Surgery, {
            as: 'surgeries',
            through: PatientSurgeryTable,
            foreignKey: 'patient_id',
            otherKey: 'surgery_id'
        });

        models.Surgery.belongsToMany(models.Patient, {
            as: 'patients',
            through: PatientSurgeryTable,
            foreignKey: 'surgery_id',
            otherKey: 'patient_id'
        })
    }

    return PatientSurgeryTable;
}

module.exports = PatientSurgerySchema;