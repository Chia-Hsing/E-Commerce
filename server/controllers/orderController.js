const Order = require('../models/order')

const getOrder = async () => {
    try {
        const UID = req.params.UID

        const pendingOrder = await Order.findOne({ customer: UID })

        return res.status(200).json({ status: 'success', order: pendingOrder, message: 'Get order success.' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const postOrder = async (req, res) => {
    try {
        const UID = req.params.UID

        const pendingOrder = await Order.findOne({ customer: UID })

        if (pendingOrder && pendingOrder.paymentStatus === 'pending') {
            return res.json({ status: 'error', message: 'Order already exist.' })
        }

        const order = new Order({
            customer: UID,
            items: req.bag.items.bag,
            totalAmount: req.bag.items.totalAmount,
            totalQuantity: req.bag.items.totalQuantity,
        })

        await order.save(error => {
            if (error) {
                console.log(error)
                return
            }
        })

        return res.status(200).json({ status: 'success', order, message: 'Create order success.' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteOrder = async (req, res) => {
    const UID = req.params.UID

    console.log(UID)

    const pendingOrder = await Order.findOne({ customer: UID })

    if (!pendingOrder) {
        return
    }

    if (pendingOrder.paymentStatus === 'pending') {
        await Order.deleteOne({ customer: UID })
    }

    return
}

const getLatestOrder = (req, res) => {
    return
}

const getEditLatestOrder = (req, res) => {
    return
}

const putLatestOrder = (req, res) => {
    return
}

const putCancelLatestOrder = (req, res) => {
    return
}

module.exports = {
    getOrder,
    postOrder,
    deleteOrder,
    getLatestOrder,
    getEditLatestOrder,
    putLatestOrder,
    putCancelLatestOrder,
}
