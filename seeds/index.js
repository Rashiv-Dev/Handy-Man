const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedAds = require('./ads-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedComments();
  console.log('--------------');
  await seedAds();
  console.log('--------------');

  process.exit(0);
};

seedAll();