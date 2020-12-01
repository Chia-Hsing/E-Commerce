const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 20,
        lowercase: true,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
