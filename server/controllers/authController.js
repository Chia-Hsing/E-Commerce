const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user')

const postSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const errorFormatter = ({ msg }) => {
            return `${msg}`
        }
        const results = validationResult(req).formatWith(errorFormatter)

        if (!results.isEmpty()) {
            return res.json({
                status: 'error',
                error: results.mapped(),
                message: 'Invalid request!',
            })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.json({
                status: 'error',
                message: 'Email address already exists, please log in!',
            })
        }

        const user = new User({ name, email, password })
        const token = user.generateAuthToken()

        await user.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })

        return res.status(200).json({
            status: 'success',
            token,
            message: 'Creating user success!',
        })
    } catch (error) {
        return res.status(500).send(error)
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
