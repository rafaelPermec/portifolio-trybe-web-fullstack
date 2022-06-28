const PlanSchema = (sequelize, DataTypes) => {
  const PlanTable = sequelize.define("Plan", {
    plan_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, { timestamps: false })

  PlanTable.associate = models => {
    PlanTable.hasMany(models.Patient, {
      foreignKey: 'plan_id',
      as: 'patients'
    })
  };

  return PlanTable;
}

module.exports = PlanSchema;