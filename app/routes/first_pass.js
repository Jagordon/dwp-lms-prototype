const express = require('express')
const router = express.Router()

router.get('/search', function (req, res) {
    return res.render('../views/first_pass/search.html');
});

router.post('/search', function (req, res) {
    return res.redirect('/first_pass/home');
});

router.get('/first_pass/home', function (req, res) {
    res.render('../views/first_pass/home.html');
});

router.get('/first_pass/config', function (req, res) {
    res.render('../views/first_pass/config.html');
});

module.exports = router;