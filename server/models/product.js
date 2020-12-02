const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: 1,
            maxlength: 50,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            min: 0,
            required: true,
        },
        stock: {
            type: Number,
            min: 0,
            required: true,
        },
        description: {
            type: String,
            minlength: 1,
            maxlength: 200,
        },
        image: {
            type: Buffer,
            default: '',
            required: true,
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
)

const Product = new mongoose.model('Product', productSchema)

module.exports = Product
