const Product = require('../models/product')

// pass params on the search query to get products meeting the request from the database.
const getProducts = async (req, res) => {
    try {
        const { gender, category, pageItemsLimit, page } = req.query
        let productResponse = {}

        // while there's neither category nor gender search query.
        if (category === 'null' && gender === 'null') {
            return res.status(200).json({ status: 'error', message: 'Request rejected - invalid search condition!' })
        }

        // when first visiting the products page, only need to find the first 6 items for frontend rendering. while the number of pages greater than 1, skip the first 6 items and find the next 6 items for rendering.
        if (category === 'null') {
            const count = await Product.countDocuments({ gender })
            const totalPages = Math.ceil(count / pageItemsLimit)

            const products =
                +page > 1
                    ? await Product.find({ gender }, { name: 1, image: 1, price: 1, _id: 1 })
                          .skip((+page - 1) * pageItemsLimit)
                          .limit(6)
                          .sort({ createdAt: 1 })
                    : await Product.find({ gender }, { name: 1, image: 1, price: 1, _id: 1 })
                          .limit(6)
                          .sort({ createdAt: 1 })

            productResponse = {
                totalPages,
                products,
            }
        } else if (gender === 'null') {
            const count = await Product.countDocuments({ 'category.name': category })
            const totalPages = Math.ceil(count / pageItemsLimit)

            const products =
                +page > 1
                    ? await Product.find({ 'category.name': category }, { name: 1, image: 1, price: 1, _id: 1 })
                          .skip((+page - 1) * pageItemsLimit)
                          .limit(6)
                          .sort({ createdAt: 1 })
                    : await Product.find({ 'category.name': category }, { name: 1, image: 1, price: 1, _id: 1 })
                          .limit(6)
                          .sort({ createdAt: 1 })

            productResponse = {
                totalPages,
                products,
            }
        } else if (gender && category) {
            const count = await Product.where({ gender, 'category.name': category }).countDocuments()
            const totalPages = Math.ceil(count / pageItemsLimit)

            const products =
                +page > 1
                    ? await Product.find({ gender, 'category.name': category }, { name: 1, image: 1, price: 1, _id: 1 })
                          .skip((+page - 1) * pageItemsLimit)
                          .limit(6)
                          .sort({ createdAt: 1 })
                    : await Product.find({ gender, 'category.name': category }, { name: 1, image: 1, price: 1, _id: 1 })
                          .limit(6)
                          .sort({ createdAt: 1 })

            productResponse = {
                totalPages,
                products,
            }
        }
        return res.status(200).json({ status: 'success', productResponse, message: 'Request success!' })
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'Something went wrong on server side!' })
    }
}

const getProduct = async (req, res) => {
    try {
        const PID = req.body.params

        const product = await Product.findById(PID)

        if (!product) {
            return res.status(404).json({ status: 'error', message: 'product no found!' })
        }

        return res.status(200).json({ status: 'success', product, message: 'request success' })
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'Something went wrong on server side!' })
    }
}

module.exports = {
    getProducts,
    getProduct,
}
