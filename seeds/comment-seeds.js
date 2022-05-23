const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
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


const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;