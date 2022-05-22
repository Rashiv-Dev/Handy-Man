const router =require('express').Router()
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('login');
});
router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.get('/dashboard', withAuth, (req, res) =>{
    res.render('dashboard')
});
router.get('/ads',withAuth, (req, res) => {
    res.render('ads');
});

module.exports = router;