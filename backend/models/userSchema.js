const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }

}, {
    timestamps: true,
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })

    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (isPasswordValid) {
            return user
        }

        throw "invalid password"
    }

    throw "invalid email"
}

const User = mongoose.model('User', userSchema)

module.exports = User