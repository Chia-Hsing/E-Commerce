const mainCategories = require('../json/mainCategories.json')

const getMainItems = (req, res) => {
    return res.status(200).json({ status: 'success', mainCategories, message: 'main page image' })
}

module.exports = {
    getMainItems,
}
