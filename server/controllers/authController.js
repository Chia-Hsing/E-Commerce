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

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body

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

        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                status: 'error',
                message: 'Email address is not registered yet, please sign up!',
            })
        }

        const isPasswordMatched = await user.findByCredentials(password)

        if (!isPasswordMatched) {
            return res.json({
                status: 'error',
                message: 'Password incorrect!',
            })
        }

        const token = user.generateAuthToken()

        return res.status(200).json({
            status: 'success',
            token,
            message: 'Log in success!',
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    postSignup,
    postLogin,
}
