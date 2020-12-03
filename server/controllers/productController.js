const Product = require('../models/product')
const Category = require('../models/category')

const getProducts = async (req, res) => {
    const gender = req.query.gender
    const category = req.query.category
    res.status(200).json({ gender, category })
}

const getProduct = (req, res) => {
    return
}

module.exports = {
    getProducts,
    getProduct,
}
