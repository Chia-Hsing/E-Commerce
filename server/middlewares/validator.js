const { body } = require('express-validator')

const validator = {
    createNewProduct: [
        body('name').trim().notEmpty().isLength({ main: 1, max: 50 }).withMessage('Product name is required.'),
        body('category').isLength({ main: 1, max: 20 }).withMessage('Category field is required.'),
        body('gender').custom(val => {
            if (val !== 'man' || val !== 'woman') {
                return new Error('Gender should be man or woman!')
            }
            return true
        }),
        body('description').notEmpty().withMessage('Please write some description!'),
        body('price')
            .isCurrency({
                symbol: '￥',
                require_symbol: true,
                allow_negatives: false,
                thousands_separator: ',',
            })
            .withMessage('Price must be a positive number.'),
        body('stock').isInt().withMessage('Stock must be a positive number.'),
        body('image'),
    ],
}

module.exports = validator
