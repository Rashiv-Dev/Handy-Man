<<<<<<< HEAD
const Ads = require("./Ads");
const User = require("./User");

User.hasMany(Ads, {
  foreignKey: "User_id",
});
Ads.belongsTo(User, {
  foreignKey: "User_id",
});
=======

const Ads = require('./Ads');
const User = require('./User');
const Comments = require('./Comments');


Ads.hasMany(Comments,{
foreignKey:'user_id'
});
User.hasMany(Ads,{
foreignKey:'user_id'
});
Comments.belongsTo(Ads,{
    through: User,
    foreignKey: 'user_id'
});
Ads.belongsTo(User,{
    foreignKey: 'user_id'
});



module.exports = {Ads,User,Comments};

>>>>>>> a72d6637c82b31cb5fbf71992f8ee6c678b85fcc
