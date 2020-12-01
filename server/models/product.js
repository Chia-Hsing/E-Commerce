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
            type: Number,
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
            type: String,
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

const Product = mongoose.model('Product', productSchema)

module.exports = Product
