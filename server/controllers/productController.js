const Product = require('../models/product')
const Category = require('../models/category')

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
                    ? await Product.find({ gender })
                          .skip((+page - 1) * pageItemsLimit)
                          .limit(6)
                    : await Product.find({ gender }).limit(6)

            productResponse = {
                count,
                totalPages,
                products,
            }
        } else if (gender === 'null') {
            const count = await Product.countDocuments({ category })
            const totalPages = Math.ceil(count / pageItemsLimit)

            const products =
                +page > 1
                    ? await Product.find({ category })
                          .skip((+page - 1) * pageItemsLimit)
                          .limit(6)
                    : await Product.find({ category }).limit(6)

            productResponse = {
                count,
                totalPages,
                products,
            }
        } else {
            const count = Product.countDocuments({ gender, category })
            const totalPages = Math.ceil(count / pageItemsLimit)

            const products =
                +page > 1
                    ? await Product.find({ gender, category })
                          .skip((+page - 1) * pageItemsLimit)
                          .limit(6)
                    : await Product.find({ gender, category }).limit(6)

            productResponse = {
                count,
                totalPages,
                products,
            }
        }
        return res.status(200).json({ status: 'success', productResponse, message: 'Request success!' })
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'Something went wrong on server side!' })
    }
}

const getProduct = (req, res) => {
    return
}

module.exports = {
    getProducts,
    getProduct,
}
