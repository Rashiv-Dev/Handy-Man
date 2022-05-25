const Ads = require('./Ads');
const User = require('./User');
const Comments = require('./Comments');

User.hasMany(Comments);
User.hasMany(Ads);
Ads.belongsTo(User);
Comments.belongsTo(User)
module.exports = {Ads,User,Comments};