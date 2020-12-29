const Product = require('../models/product')
const { Category } = require('../models/category')
const sharp = require('sharp')
const { validationResult } = require('express-validator')

const postProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({
                status: 'error',
                message: 'Should upload a picture of the product.',
            })
        }

        const buffer = await sharp(req.file.buffer).resize({ width: 300, height: 200 }).png().toBuffer()

        const categorySelected = await Category.findById({ _id: req.body.categoryId })
        if (!categorySelected) {
            return res.json({
                status: 'error',
                message: 'Category not found!',
            })
        }

        const product = new Product({
            ...req.body,
            category: categorySelected,
            image: buffer,
        })

        await product.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })

        return res.status(200).json({
            status: 'success',
            product,
            message: 'Creating product success.',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

const postCategory = async (req, res) => {
    try {
        const category = new Category({ ...req.body })
        await category.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })
        return res.status(200).json({
            status: 'success',
            category,
            message: 'Creating category success.',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

// const getProducts = (req, res) => {
//     return
// }

// const getProduct = (req, res) => {
//     return
// }

// const putProduct = (req, res) => {
//     return
// }
// const deleteProduct = (req, res) => {
//     return
// }

module.exports = {
    // getProducts,
    // getProduct,
    postProduct,
    postCategory,
    // putProduct,
    // deleteProduct,
}
