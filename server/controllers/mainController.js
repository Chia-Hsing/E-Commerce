const mainMaterials = require('../json/mainMaterials.json')

const getMainMaterials = (req, res) => {
    return res.status(200).json({ status: 'success', mainMaterials, message: 'main page materials' })
}

module.exports = {
    getMainMaterials,
}
