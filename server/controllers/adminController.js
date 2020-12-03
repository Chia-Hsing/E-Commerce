const Product = require('../models/product')
const Category = require('../models/category')
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
        const product = new Product({ ...req.body, image: buffer })
        await product.save()
        return res.status(200).json({
            status: 'success',
            message: 'Creating product successfully.',
        })
    } catch (e) {
        res.status(404).json({
            status: 'error',
            message: 'Something went wrong during creating product.',
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
    // putProduct,
    // deleteProduct,
}
