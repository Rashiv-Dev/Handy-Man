const Ads = require("./Ads");
const User = require("./User");

User.hasMany(Ads, {
  foreignKey: "User_id",
});
Ads.belongsTo(User, {
  foreignKey: "User_id",
});
