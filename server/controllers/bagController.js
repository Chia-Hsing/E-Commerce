const Bag = require('../models/bag')
const Product = require('../models/product')
const jwt = require('jsonwebtoken')

bagToJwt = bag => {
    return jwt.sign(
        {
            items: { bag },
            iat: new Date().getTime(),
            exp: new Date().setSeconds(3600),
        },
        process.env.JWT_SECRET_BAG
    )
}

const addItemToBag = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id).select(['name', 'category.name', 'price', 'stock'])
        // req.bag = { items: { bag:[] }, exp..., iat...}
        // req.bag.items.bag = [...]
        console.log(req.bag.items.bag)
        const bag = new Bag(req.bag.items.bag)
        bag.addItemToBag(product)
        const token = bagToJwt(bag)
        return res.status(200).json({ status: 'success', token, message: 'success to get bag token!' })
    } catch (error) {}
}

module.exports = {
    addItemToBag,
}
