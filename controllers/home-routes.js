const router =require('express').Router()
const withAuth = require('../utils/auth');
const {User,Comment,Ads} =require('../models');

router.get('/', (req, res) => {
    res.render('login');
});
router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.get('/dashboard', withAuth, (req, res) =>{
    try{
        const dbUserData = await User.findAll({
            include:[ {
                model:Comment, Ads
            },
        ],
        });
        const users = dbUserData.map((user)=> user.get({plain:true}));

    res.render('dashboard',{
        users,
        loggedIn: req.session.loggedIn,
    })
    }
    catch (err) {
        crossOriginIsolated.log(err);
        res.status(500).json(err);
    }
});

router.get('/ads',withAuth, (req, res) => {
    res.render('ads',{
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;