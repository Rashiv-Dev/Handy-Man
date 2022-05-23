const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
  {
    user_id: 'user1',
    user_test: 'yabadab@somesite.com',
    comment_text: 'The ipsum apsum shock shak. Mr arts n'
  },
  {
    user_id: 'user2',
    user_test: 'bigbad@yahoo.com',
    comment_text: 'Smarty ipsy opsum OMG it was co crazy man'
  }
]


const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;