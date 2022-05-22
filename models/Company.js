const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Company extends Model {}

Company.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Company;
