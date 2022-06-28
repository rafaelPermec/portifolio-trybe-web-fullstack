const SurgerySchema = (sequelize, DataTypes) => {
  const SurgeryTable = sequelize.define('Surgery',{
    surgery_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING
  }, { timestamps: false });
  return SurgeryTable;
};

module.exports = SurgerySchema;