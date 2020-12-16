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
    // token: {items: {bag: [{},{},{}] }
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
                    .json({ status: 'error', token, message: 'do not add any product to shopping bag!' })
            }
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_BAG)
        req.bag = decodedToken
        next()
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'something went wrong on the server side!' })
    }
}

// tokenCartItems: async (req, res, next) => {
//     // let token = req.header('cart-items');
//     let { token } = req.body

//     try {
//         if (!token) {
//             token = JWT.sign(
//                 {
//                     items: { cart: [] },
//                     iat: new Date().getTime(),
//                     exp: new Date().setSeconds(3600),
//                 },
//                 JWT_SECRET_CART
//             )
//             if (!req.params.id) {
//                 //res.header("cart-items", token);
//                 return res.status(200).json(token)
//             }
//         }
//         if (typeof token !== 'undefined') {
//             //res.header("cart-items", token);
//             const decoded = JWT.verify(token, JWT_SECRET_CART)
//             req.cart = decoded
//             await next()
//         } else {
//             res.status(400).send('Invalid cart token.')
//         }
//     } catch (err) {
//         res.status(400).send('Invalid cart token.')
//     }
// },
module.exports = {
    upload,
    bagItemToken,
}
