const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedCompany = require('./company-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedComments();
  console.log('--------------');
  await seedCompany();
  console.log('--------------');

  process.exit(0);
};

seedAll();
