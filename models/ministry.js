module.exports = function(sequelize, DataTypes) {
  const Ministry = sequelize.define('Ministry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    text: DataTypes.STRING,
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: DataTypes.STRING,
    churches: DataTypes.ARRAY
  });
  return Ministry;
};