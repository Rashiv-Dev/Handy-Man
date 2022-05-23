const router =require('express').Router()
const withAuth = require('../utils/auth');
const {User,Comments,Ads} =require('../models');

router.get('/', (req, res) => {
    res.render('login');
});
router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.get('/dashboard',withAuth, async (req, res) =>{
    try{
        const dbUserData = await User.findAll({
            include:[
                {
                    model:Comments,Ads
                },
            ],
        });
        const users = dbUserData.map((user)=>
        user.get({plain:true}));
        res.render('dashboard',{
            users,
            loggedIn: req.session.loggedIn,
        }) 
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
});

router.get('/ads',withAuth, (req, res) => {
    res.render('ads',{
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;