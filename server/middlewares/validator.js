const { body } = require('express-validator')

const validator = {
    createNewProduct: [
        body('name').trim().notEmpty().isLength({ main: 1, max: 50 }).withMessage('Invalid Product name.'),
        body('category').isLength({ main: 1, max: 20 }).withMessage('Invalid Category field.'),
        body('gender').custom(val => {
            if (val !== 'man' || val !== 'woman') {
                return new Error('Gender should be man or woman!')
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
        body('stock').isInt().withMessage('The stock must be a positive integer number.'),
        body('image'),
    ],
}

module.exports = validator
