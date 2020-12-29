const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timeStamps: true,
    }
)

userSchema.methods.generateAuthToken = function () {
    const user = this
    const token = jwt.sign(
        {
            _id: user._id,
            iat: new Date().getTime(),
            exp: new Date().getTime() + 3600000,
        },
        process.env.JWT_SECRET_AUTH
    )

    return token
}

userSchema.methods.findByCredentials = async function (password) {
    const user = this
    const isMatched = await bcrypt.compare(password, user.password)

    return isMatched
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
