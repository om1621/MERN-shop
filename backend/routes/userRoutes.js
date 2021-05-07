const express = require('express')
const router = express.Router()
const { userAuthentication, createUser } = require('../controllers/userController')

router.post('/login', userAuthentication)
router.post('/signup', createUser)

module.exports = router