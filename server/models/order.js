const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        items: {
            type: Array,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        totalQuantity: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        paymentStatus: {
            type: String,
            default: 'pending',
        },
        delivery: {
            type: String,
            default: 'pending',
        },
    },
    {
        timeStamp: true,
    }
)

const Order = new mongoose.Model('Order', orderSchema)

module.exports = Order
