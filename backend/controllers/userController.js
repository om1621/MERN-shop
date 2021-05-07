const User = require('../models/userSchema')
const createToken = require('../utils/createToken')
const handleErrors = require('../utils/handleErrors')

// @desc   Check user exists or not
// @route  /api/user/login
// @access Public
const userAuthentication = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 })
        res.json({ user, token })
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
        res.json({ user, token })
    }
    catch (err) {
        const errorData = handleErrors(err)
        res.status(404).json(errorData)
    }
}

module.exports = { userAuthentication, createUser }