const multer = require('multer')
const jwt = require('jsonwebtoken')

const upload = multer({
    limits: { fileSize: 1000000 },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('The file type should be jpg/jpeg/png.'))
        }
        cb(undefined, true)
    },
})

const bagItemToken = async (req, res, next) => {
    let { token } = req.body

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
                return res
                    .status(200)
                    .json({ status: 'error', token, message: 'You did not add any product to your shopping bag!' })
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

module.exports = {
    upload,
    bagItemToken,
}
