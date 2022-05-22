const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Ad extends Model {}

Ad.init(
  {
    ad_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    srvcs: {
      type: DataTypes.STRING,
    },
    company_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = Ad;
