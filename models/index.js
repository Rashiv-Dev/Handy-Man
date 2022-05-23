<<<<<<< HEAD
=======
const Ads = require('./Ads');
const User = require('./User')

User.hasMany( Ads, {
    foreignKey:'User_id'
})
Ads.belongsTo(User,{
    foreignKey: 'User_id'
})




module.exports = {Ads,User};
>>>>>>> 9c39f3f8785e05cea1b092cd6042f1f8955c97e7
