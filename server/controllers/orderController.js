const Order = require('../models/order')

const postOrder = async (req, res) => {
    try {
        const UID = req.user._id
        const newOrder = { ...req.body.order }

        const order = new Order({
            customer: UID,
            items: newOrder.items,
            totalAmount: newOrder.totalAmount,
            totalQuantity: newOrder.totalQuantity,
            paymentStatus: req.body.status,
            shippingDetail: newOrder.shippingDetail,
        })

        await order.save(error => {
            if (error) {
                return res.json({ status: 'error', message: error.message })
            }
        })

        return res.status(200).json({ status: 'success', order, message: 'Create order success.' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteOrder = async (req, res) => {
    const UID = req.params.UID

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
    postOrder,
    deleteOrder,
    getLatestOrder,
    getEditLatestOrder,
    putLatestOrder,
    putCancelLatestOrder,
}
