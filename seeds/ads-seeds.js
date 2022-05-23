const sequelize = require('../config/connection');
const { User} = require('../models');

const adsData = [
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

const seedAds = () => User.bulkCreate(adsData, {individualHooks: true});

module.exports = seedAds;