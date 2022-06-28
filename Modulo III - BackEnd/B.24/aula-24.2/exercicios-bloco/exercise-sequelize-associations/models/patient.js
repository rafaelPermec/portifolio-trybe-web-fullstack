const PatientSchema =  (sequelize, DataTypes) => {
  const PatientTable = sequelize.define('Patient', {
    patient_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullname: DataTypes.STRING,
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, { timestamps: false });

  PatientTable.associate = models => {
    PatientTable.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plan'
    })
  };


  return PatientTable;
}
module.exports = PatientSchema;