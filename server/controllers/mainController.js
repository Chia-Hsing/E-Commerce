const mainCategories = require('../json/mainCategories.json')

const getMainMaterials = (req, res) => {
    return res.status(200).json({ status: 'success', mainCategories, message: 'main page materials' })
}

module.exports = {
    getMainMaterials,
}
