const mainCategories = require('../json/mainCategories.json')
const Product = require('../models/product')

const getMainMaterials = async (req, res) => {
    try {
        const newArrival = await Product.find().limit(8).sort({ createdAt: 1 })

        return res.status(200).json({ status: 'success', newArrival, mainCategories, message: 'main page materials' })
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'Something went wrong on server side!' })
    }
}

module.exports = {
    getMainMaterials,
}
