const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const companydata = [
  {
    company_name: 'JD Stoneworks',
    ad_text: 'Let us take your run down back yeard and turn it into another livable room.',
    company_email: 'smartFigure67@gmail.com',
    service: 'Landscaping'
  },
  {
    company_name: 'ABC closets',
    ad_text: 'Let us transform your closets into some real closets baby!',
    company_email: 'abcclosets@sogou.com',
    service: 'Carpentry'
  },

];

const seedCompany = () => User.bulkCreate(companydata, {individualHooks: true});

module.exports = seedCompany;