const Bag = require('../models/bag')
const Product = require('../models/product')

const addItemToBag = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)

        console.log(product)
        return
    } catch (error) {}
}

module.exports = {
    addItemToBag,
}
