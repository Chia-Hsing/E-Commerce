const Product = require('../models/product')
const Category = require('../models/category')

const getProducts = async (req, res) => {
    console.log()
    try {
        const pageItemsLimit = 6
        const { gender, category, page } = req.query
        let productResponse = {}

        if (!category && !gender) {
            return res.status(400).json({ status: 'error', message: 'Request rejected!' })
        }

        if (+page > 1) {
            if (category === 'null') {
                const count = (await Product.countDocuments({ gender })) - pageItemsLimit
                const totalPages = Math.ceil((count - pageItemsLimit) / pageItemsLimit)

                console.log(count, totalPages)
                await Product.find()
                    .where('gender')
                    .slice(pageItemsLimit)
                    .exec((e, products) => {
                        if (e || !products) {
                            throw new Error('Something went wrong when requesting!')
                        } else {
                            productResponse = {
                                totalPages,
                                count,
                                products,
                            }
                        }
                    })
            } else if (gender === 'null') {
                const count = (await Product.countDocuments({ category })) - pageItemsLimit
                const products = await Product.find().where('category').slice(pageItemsLimit)
                const totalPages = Math.ceil((count - pageItemsLimit) / pageItemsLimit)

                productResponse = {
                    totalPages,
                    count,
                    products,
                }
            } else {
                const count = (await Product.countDocuments({ gender, category })) - pageItemsLimit
                const products = await Product.find().where({ gender, category }).slice(pageItemsLimit)
                const totalPages = Math.ceil((count - pageItemsLimit) / pageItemsLimit)

                productResponse = {
                    totalPages,
                    count,
                    products,
                }
            }
            return res.status(200).json({ status: 'success', productResponse, message: 'Request success!' })
        }

        if (category === 'null') {
            await Product.find()
                .where('gender')
                .slice(0, 5)
                .exec((e, products) => {
                    if (e || !products) {
                        throw new Error('Something went wrong when requesting!')
                    } else {
                        productResponse = {
                            products,
                        }
                    }
                })
        } else if (gender === 'null') {
            await Product.find()
                .where('category')
                .slice(0, 5)
                .exec((e, products) => {
                    if (e || !products) {
                        throw new Error('Something went wrong when requesting!')
                    } else {
                        productResponse = {
                            products,
                        }
                    }
                })
        } else {
            await Product.find()
                .slice({ gender, category }, 5)
                .exec((e, products) => {
                    if (e || !products) {
                        throw new Error('Something went wrong when requesting!')
                    } else {
                        productResponse = {
                            products,
                        }
                    }
                })
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
