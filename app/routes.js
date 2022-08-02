const express = require('express')
const router = express.Router()
const firstRoutes = require('./routes/first_pass')

router.use('/first_pass/', firstRoutes)

module.exports = router
