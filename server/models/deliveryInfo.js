const mongoose = require('mongoose')

const deliveryInfoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            default: '',
            ref: 'User',
        },
        firstName: {
            type: String,
            default: '',
        },
        lastName: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        district: {
            type: String,
            default: '',
        },
        city: {
            type: String,
            default: '',
        },
        postalCode: {
            type: Number,
            default: null,
        },
        phone: {
            type: String,
            default: '',
        },
    },
    {
        timeStamps: true,
    }
)

const DeliveryInfo = mongoose.model('DeliveryInfo', deliveryInfoSchema)

module.exports = DeliveryInfo
