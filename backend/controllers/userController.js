const User = require('../models/userSchema')
const createToken = require('../utils/createToken')

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
        res.send(err)
        console.log(err)
    }


}

module.exports = { userAuthentication }