const multer = require('multer')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const User = require('../models/user')

const storage = multer.memoryStorage()

const upload = multer({
    storage,
    limits: { fileSize: 90000000 },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('The file type should be jpg/jpeg/png.'))
        }
        cb(undefined, true)
    },
})

const bagItemToken = async (req, res, next) => {
    let {
        oldToken: { token },
    } = req.body

    try {
        if (!token) {
            token = jwt.sign(
                {
                    items: { bag: [] },
                    iat: new Date().getTime(),
                    exp: new Date().setSeconds(3600),
                },
                process.env.JWT_SECRET_BAG
            )
            if (!req.params.id) {
                return res.status(200).json({ status: 'error', token, message: 'Invalid product id!' })
            }
        }

        // { items: { bag:[ {item:{}, ......} ] }, iat: ..., exp: ... }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_BAG)
        req.bag = decodedToken
        next()
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'something went wrong on the server side!' })
    }
}

const validationMessage = (req, res, next) => {
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
    next()
}

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')

        const decoded = jwt.verify(token, process.env.JWT_SECRET_AUTH)

        const user = await User.findOne({ _id: decoded._id }, { password: 0 })

        if (!user) {
            throw new Error('User authorization failed!')
        }

        req.token = token
        req.user = user

        next()
    } catch (error) {
        return res.json({ status: 'error', message: error.message })
    }
}

module.exports = {
    upload,
    bagItemToken,
    validationMessage,
    auth,
}
