const express = require('express')
const router = express.Router()
const firstRoutes = require('./routes/first_pass')
// const ucCloneRoutes = require('./routes/uc_clone');

router.use('/first_pass', firstRoutes)


router.get('/search', function (req, res) {
    return res.render('../views/first_pass/search.html');
});

router.post('/search', function (req, res) {
    return res.redirect('/first_pass/home');
});

router.get('/uc_clone/agent-home', function (req, res) {
    res.render('../views/uc_clone/agent-home.html');
});


// CLAIMANT
router.get('/uc_clone/claimant-search',(req, res) => {
    res.render('../views/uc_clone/claimant-search.html', {
        navLocation: 'todo'
    });
});

router.get('/uc_clone/claimant-view', (req, res) => {
    res.render('../views/uc_clone/claimant-view.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-appointment', (req, res) => {
    res.render('../views/uc_clone/claimant-book-appointment.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-appointment-wc', (req, res) => {
    res.render('../views/uc_clone/claimant-book-appointment-wc.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-slot', (req, res) => {
    res.render('../views/uc_clone/claimant-book-slot.html', {
        navLocation: 'claimant'
    });
});

router.get('/uc_clone/claimant-book-further', (req, res) => {
    res.render('../views/uc_clone/claimant-book-further.html', {
        navLocation: 'claimant'
    });
});


router.get('/uc_clone/claimant-book-confirm', (req, res) => {
    res.render('../views/uc_clone/claimant-book-confirm.html', {
        navLocation: 'claimant'
    });
});
module.exports = router
