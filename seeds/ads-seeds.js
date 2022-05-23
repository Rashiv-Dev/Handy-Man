const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const companydata = [
  {
    company_name: 'JD Stoneworks',
    service: 'Landscaping',
    ad_text: 'Let us take your run down back yeard and turn it into another livable room.',
    user_id: 1,
    
  },
  {
    company_name: 'ABC closets',
    service: 'Carpentry',
    ad_text: 'Let us transform your closets into some real closets baby!',
    user_id: 2,
  },

];

const seedCompany = () => User.bulkCreate(companydata, {individualHooks: true});

module.exports = seedCompany;