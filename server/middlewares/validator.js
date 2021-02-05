const { body, param } = require('express-validator')

const validator = {
    createNewProduct: [
        body('name').trim().notEmpty().isLength({ min: 1, max: 50 }).withMessage('Invalid product name.'),
        body('categoryId').isMongoId().withMessage('Invalid id'),
        body('gender').custom(val => {
            if (val !== 'men' || val !== 'women') {
                return new Error('Gender should be men or women!')
            }
            return true
        }),
        body('description').notEmpty().withMessage('The description should not be blank!'),
        body('price')
            .isCurrency({
                symbol: '￥',
                require_symbol: true,
                allow_negatives: false,
                thousands_separator: ',',
            })
            .withMessage('The price must be a positive integer number.'),
        body('stock.*').isInt().withMessage('The stock should be a positive integer!'),
    ],
    createNewCategory: [
        body('name').trim().notEmpty().isLength({ main: 1, max: 20 }).withMessage('Invalid category name.'),
    ],
    bagOperation: [param('id').isMongoId().withMessage('Invalid id')],
    signupAuthenticate: [
        body('name').trim().notEmpty().isLength({ min: 1, max: 20 }).withMessage('Invalid user name.'),
        body('email').trim().isEmail().withMessage('Invalid email address!'),
        body('password').custom(value => {
            const regex = /^\S{8,12}$/
            const PWCheck = value.match(regex)
            if (!PWCheck) {
                throw new Error('Invalid password!')
            }
            // if pass the validation, must return true
            return true
        }),
        body('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password authentication failed!')
            }
            return true
        }),
    ],
    loginAuthenticate: [
        body('email').trim().isEmail().withMessage('Invalid email address!'),
        body('password').custom(value => {
            const regex = /^\S{8,12}$/
            const PWCheck = value.match(regex)
            if (!PWCheck) {
                throw new Error('Invalid password!')
            }
            // if pass the validation, must return true
            return true
        }),
    ],
    checkUserProfileUpdate: [
        body('name').trim().notEmpty().isLength({ min: 1, max: 20 }).withMessage('Invalid name!'),
        body('email').trim().isEmail().withMessage('Invalid email address!'),
    ],
    checkDeliveryInfo: [
        body('firstName').trim().notEmpty().withMessage('Invalid first name!'),
        body('lastName').trim().notEmpty().withMessage('Invalid last name!'),
        body('phone')
            .trim()
            .custom(value => {
                const regex = /09\d{2}(\d{6}$|-\d{3}-\d{3})$/
                const phoneCheck = value.match(regex)
                if (!phoneCheck) {
                    throw new Error('Invalid phone number!')
                }
                return true
            }),
        body('address').trim().notEmpty().withMessage('Invalid address!'),
        body('district').trim().notEmpty().withMessage('Invalid district!'),
        body('city').trim().notEmpty().withMessage('Invalid city!'),
        body('postalCode')
            .trim()
            .custom(value => {
                const regex = /^\d{5}$|^\d{3}$/
                const PostalCodeCheck = value.match(regex)
                if (!PostalCodeCheck) {
                    throw new Error('Invalid postal code!')
                }
                return true
            }),
    ],
}

module.exports = validator
