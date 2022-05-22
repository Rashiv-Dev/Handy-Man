const ads = require('./ads');
const user = require('./user')

user.hasMany( ads, {
    foreignKey:'user_id'
})
ads.belongsTo(user,{
    foreignKey: 'user_id'
})




module.exports = {ads,user};