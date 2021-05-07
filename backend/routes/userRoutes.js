const express = require('express')
const router = express.Router()
const { userAuthentication, createUser, getCurrentUser } = require('../controllers/userController')

router.get('/', getCurrentUser)
router.post('/login', userAuthentication)
router.post('/signup', createUser)

module.exports = router