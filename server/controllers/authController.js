const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user')

const postSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ status: 'success', message: 'Email address exists, please log in!' })
        }

        const user = new User({ name, email, password })
        const token = await user.generateAuthToken()
        await user.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })

        return res.status(200).json({
            status: 'success',
            token,
            message: 'Create user success!',
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            error,
            message: 'Create user failed!',
        })
    }
}

const postLogin = (req, res) => {
    return
}

const postLogout = (req, res) => {
    return
}

module.exports = {
    postSignup,
    postLogin,
    postLogout,
}
