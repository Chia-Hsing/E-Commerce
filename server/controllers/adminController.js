const Product = require('../models/product')
const Category = require('../models/category')

// const getProducts = (req, res) => {
//     return
// }

// const getProduct = (req, res) => {
//     return
// }

const postProduct = async (req, res) => {
    try {
        const product = new Product({ ...req.body })
        await product.save()
        return
    } catch (e) {}
}
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
