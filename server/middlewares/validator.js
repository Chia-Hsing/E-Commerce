const { body, param } = require('express-validator')

const validator = {
    createNewProduct: [
        body('name').trim().notEmpty().isLength({ main: 1, max: 50 }).withMessage('Invalid Product name.'),
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
    addItemToBag: [param('id').isMongoId().withMessage('Invalid id')],
}

module.exports = validator
