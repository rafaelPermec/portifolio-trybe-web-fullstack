const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User',{
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, { timestamps: false });
  return UserTable;
};

module.exports = UserSchema;