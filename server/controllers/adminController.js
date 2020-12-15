const Product = require('../models/product')
const { Category } = require('../models/category')
const sharp = require('sharp')
const { validationResult } = require('express-validator')

const postProduct = async (req, res) => {
    try {
        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        if (!req.file) {
            return res.status(404).json({
                status: 'error',
                message: 'Should upload a picture of the product.',
            })
        }

        const buffer = await sharp(req.file.buffer).resize({ width: 300, height: 200 }).png().toBuffer()

        const categorySelected = await Category.findById({ _id: req.body.categoryId })
        if (!categorySelected) {
            return res.status(404).json({ status: 'error', message: 'Category  not found!' })
        }

        const product = new Product({ ...req.body, category: categorySelected, image: buffer })

        await product.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })

        return res.status(200).json({
            status: 'success',
            message: 'Create product success.',
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error,
            message: 'Something went wrong during creating product.',
        })
    }
}

const postCategory = async (req, res) => {
    try {
        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        const category = new Category({ ...req.body })
        await category.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })
        return res.status(200).json({
            status: 'success',
            message: 'Create category success.',
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            error,
            message: 'Something went wrong during creating category.',
        })
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
