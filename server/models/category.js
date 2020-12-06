const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 20,
        uppercase: true,
        required: true,
    },
})

const Category = mongoose.model('Category', categorySchema)

module.exports = {
    Category,
    categorySchema,
}
