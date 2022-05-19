const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const companydata = [
  {
    companyname: 'JD Stoneworks',
    companyemail: 'jdstoneworks0@cbc.ca',
    service: 'Landscaping'
  },
  {
    companyname: 'ABC closets',
    companyemail: 'abcclosets@sogou.com',
    service: 'Carpentry'
  },
  {
    companyname: 'JS Power',
    companyemail: 'jspower2@last.fm',
    service: 'Electrical'
  },
  {
    companyname: 'UTECH',
    companyemail: 'utech@goo.ne.jp',
    service: 'Electrical'
  },
  {
    companyname: 'JLS Landscaping',
    companyemail: 'jlslandscaping4@weather.com',
    service: 'Landscaping'
  },
  {
    companyname: 'POCO Stude',
    companyemail: 'pocostuds@imdb.com',
    service: 'Remodeling'
  },
  {
    username: 'The Tree Guys',
    companyemail: 'treeguys@feedburner.com',
    service: 'Tree Trimming'
  },
  {
    companyname: 'Everything Outdoors',
    companyemail: 'eoutdoors@china.com.cn',
    service: 'Landscaping'
  },
  {
    companyname: 'The Brick Boys',
    companyemail: 'brickboys@google.ru',
    service: 'Masonry'
  },
  {
    companyname: 'Cement Guys and Gals',
    companyemail: 'cg&g@epa.gov',
    service: 'cement'
  }
];

const seedCompany = () => User.bulkCreate(companydata, {individualHooks: true});

module.exports = seedCompany;