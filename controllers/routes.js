const router =require('express').Router()
router.get('/', (req, res) => {
    res.send('login');
});
router.get('/dashboard', (req, res)=>{
    res.send('dashboard')
});
router.get('/ads', (req, res) => {
    res.send('ads');
});

module.exports = router;