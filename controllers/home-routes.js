const router =require('express').Router()
router.get('/', (req, res) => {
    res.render('login');
});
router.get('/dashboard', (req, res)=>{
    res.render('dashboard')
});
router.get('/ads', (req, res) => {
    res.render('ads');
});

module.exports = router;