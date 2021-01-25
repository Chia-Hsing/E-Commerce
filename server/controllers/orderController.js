const postOrder = (req, res) => {
    const UID = req.params.UID

    console.log(UID)
    console.log(req.bag.items.bag)
    return
}

const getLatestOrder = (req, res) => {
    return
}

const getEditLatestOrder = (req, res) => {
    return
}

const putLatestOrder = (req, res) => {
    return
}

const putCancelLatestOrder = (req, res) => {
    return
}

module.exports = {
    postOrder,
    getLatestOrder,
    getEditLatestOrder,
    putLatestOrder,
    putCancelLatestOrder,
}
