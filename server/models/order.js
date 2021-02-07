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
        paymentStatus: {
            type: String,
            default: 'pending',
        },
        shippingDetail: {
            type: Object,
        },
    },
    {
        timeStamp: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
