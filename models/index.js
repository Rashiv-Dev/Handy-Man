
const Ads = require('./Ads');
const User = require('./User');
const Comments = require('./Comments');


User.hasMany(Comments);
User.hasMany(Ads);

User.hasMany( Ads, {
    foreignKey:'User_id'
})
Ads.belongsTo(User,{
    foreignKey: 'User_id'
})




module.exports = {Ads,User};

