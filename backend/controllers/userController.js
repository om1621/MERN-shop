const User = require('../models/userSchema')
const createToken = require('../utils/createToken')
const handleErrors = require('../utils/handleErrors')
const jwt = require('jsonwebtoken')


// @desc   Check user exists or not
// @route  /api/user/login
// @access Public
const userAuthentication = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 })
        user.password = undefined
        res.json(user)
    }
    catch (err) {
        const errorData = handleErrors(err)
        res.status(404).json(errorData)
    }
}

// @desc   Creates new user
// @route  /api/user/signup
// @access Public
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 })
        user.password = undefined
        res.json(user)
    }
    catch (err) {
        const errorData = handleErrors(err)
        res.status(404).json(errorData)
    }
}

// @desc   check for cookie in browser if present return current user
// @route  /api/user/
// @access Public
const getCurrentUser = async (req, res) => {
    const token = req.cookies.jwt
    let user = null

    if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        try {
            user = await User.findById(decodedToken.id)
            user.password = undefined
            res.status(200).json(user)
        }
        catch (err) {
            console.log(err)
            res.status(404).json(user)
        }
    }
    else {
        res.status(404).json(user)
    }
}

module.exports = { userAuthentication, createUser, getCurrentUser }