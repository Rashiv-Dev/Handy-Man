const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {

    username: "test1",
    email: "test1@test.com",
    password: "1234",
  },
  {
    username: "test2",
    email: "test2@test.com",
    password: "1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;