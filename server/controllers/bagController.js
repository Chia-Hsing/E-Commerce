const Bag = require('../models/bag')
const Product = require('../models/product')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

bagToJwt = bag => {
    return jwt.sign(
        {
            items: bag,
            iat: new Date().getTime(),
            exp: new Date().setSeconds(3600),
        },
        process.env.JWT_SECRET_BAG
    )
}

const addItemToBag = async (req, res) => {
    try {
        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        const id = req.params.id
        const { itemSize, itemStock } = req.body

        const product = await Product.findById(id).select(['name', 'category.name', 'price'])

        if (!product) {
            return res.status(400).json({ status: 'error', message: 'This product can not be found!' })
        }

        // { items: { bag:[ {item:{}, quantity: ...} ], totalQuantity: 0, totalAmount: 0 }, iat: ..., exp: ... }
        const bag = new Bag(req.bag.items.bag)
        bag.addItemToBag(product, itemSize, itemStock)

        const token = bagToJwt(bag)
        return res.status(200).json({ status: 'success', token, message: 'success to get bag token!' })
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'something went wrong on server side!' })
    }
}

const deleteItemFromBag = async (req, res) => {
    try {
        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        const id = req.params.id
        const { itemSize } = req.body

        const bag = new Bag(req.bag.items.bag)
        bag.deleteItemFromBag(id, itemSize)

        const token = bagToJwt(bag)
        return res.status(200).json({ status: 'success', token, message: 'success to get bag token!' })
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'something went wrong on server side!' })
    }
}

const removeWholeItem = async (req, res) => {
    try {
        const results = validationResult(req)
        if (!results.isEmpty()) {
            return res.status(400).json({ status: 'error', message: results.array() })
        }

        const id = req.params.id
        const { itemSize } = req.body

        const bag = new Bag(req.bag.items.bag)
        bag.removeItem(id, itemSize)

        const token = bagToJwt(bag)
        return res.status(200).json({ status: 'success', token, message: 'success to get bag token!' })
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'something went wrong on server side!' })
    }
}

const cleanBag = async (req, res) => {
    try {
        const bag = new Bag([])
        bag.cleanBag()
        const token = bagToJwt(bag)
        return res.status(200).json({ status: 'success', token, message: 'success to clean bag!' })
    } catch (error) {
        return res.status(500).json({ status: 'error', error, message: 'something went wrong on server side!' })
    }
}

module.exports = {
    addItemToBag,
    deleteItemFromBag,
    removeWholeItem,
    cleanBag,
}
