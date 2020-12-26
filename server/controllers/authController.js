const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user')

const postSignup = async (req, res) => {
    try {
        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        const { name, email, password } = req.body

        return
    } catch (error) {}
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
