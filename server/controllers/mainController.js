const mainCategories = require('../json/mainCategories.json')
const Product = require('../models/product')

const getMainMaterials = async (req, res) => {
    try {
        const newArrival = await Product.find().limit(8).sort({ createdAt: 1 })

        return res.status(200).json({
            status: 'success',
            newArrival,
            mainCategories,
            message: 'Main page materials',
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    getMainMaterials,
}
