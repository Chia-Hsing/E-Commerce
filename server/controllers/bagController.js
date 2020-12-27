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
            return res.status(400).send('Invalid request!')
        }

        const id = req.params.id
        const { itemSize, itemStock } = req.body

        const product = await Product.findById(id).select(['name', 'category.name', 'price'])

        if (!product) {
            return res.json({
                status: 'error',
                message: 'Product not found!',
            })
        }

        // { items: { bag:[ {item:{}, quantity: ...} ], totalQuantity: 0, totalAmount: 0 }, iat: ..., exp: ... }
        const bag = new Bag(req.bag.items.bag)
        bag.addItemToBag(product, itemSize, itemStock)

        const token = bagToJwt(bag)
        return res.status(200).json({
            status: 'success',
            token,
            message: 'Success to get bag token!',
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

const deleteItemFromBag = async (req, res) => {
    try {
        const results = validationResult(req)

        if (!results.isEmpty()) {
            return res.status(400).send('Invalid request!')
        }

        const id = req.params.id
        const { itemSize } = req.body

        const bag = new Bag(req.bag.items.bag)
        bag.deleteItemFromBag(id, itemSize)

        const token = bagToJwt(bag)
        return res.status(200).json({
            status: 'success',
            token,
            message: 'Success to get bag token!',
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

const removeWholeItem = async (req, res) => {
    try {
        const results = validationResult(req)

        if (!results.isEmpty()) {
            return res.status(400).send('Invalid request!')
        }

        const id = req.params.id
        const { itemSize } = req.body

        const bag = new Bag(req.bag.items.bag)
        bag.removeItem(id, itemSize)

        const token = bagToJwt(bag)
        return res.status(200).json({
            status: 'success',
            token,
            message: 'Success to get bag token!',
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

const cleanBag = async (req, res) => {
    try {
        const bag = new Bag([])
        bag.cleanBag()
        const token = bagToJwt(bag)
        return res.status(200).json({
            status: 'success',
            token,
            message: 'Success to clean bag!',
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    addItemToBag,
    deleteItemFromBag,
    removeWholeItem,
    cleanBag,
}
