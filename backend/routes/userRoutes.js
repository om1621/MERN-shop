const express = require('express')
const router = express.Router()
const { userAuthentication } = require('../controllers/userController')

router.post('/login', userAuthentication)

module.exports = router