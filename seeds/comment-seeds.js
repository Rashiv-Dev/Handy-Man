const sequelize = require('../config/connection');
const { Comments } = require('../models');

const commentData = [
  { 
    rating: 4,
    text:'The ipsum apsum shock shak. Mr arts n', 
    email: 'yabadab@somesite.com',
    user_id: 1,
  },
  {
    rating: 5,
    text:'The ipsum apsum shock shak. Mr arts n', 
    email: 'bill@somesite.com',
    user_id: 2,
  }
]


const seedComments = () => Comments.bulkCreate(commentData,{individualHooks: true});

module.exports = seedComments;