
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

