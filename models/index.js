const User = require("./User");
const Company = require("./Company");
const Ad = require("./Ad");

Company.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Company.hasMany(Ad, {
  foreignKey: "companyId",
  onDelete: "CASCADE",
});

Ad.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Ad,
  Company,
};
