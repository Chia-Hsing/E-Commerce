const getUserProfile = (req, res) => {
    const user = req.user

    return res.status(200).json({ status: 'success', user, message: 'get user profile success!' })
}

// const putUserProfile = (req, res) => {
//     return
// }

// const getUserOrder = (req, res) => {
//     return
// }
// const getUserCanceledOrder = (req, res) => {
//     return
// }
// const putUserOrderHistory = (req, res) => {
//     return
// }

module.exports = {
    getUserProfile,
    // putUserProfile,
    // getUserOrder,
    // getUserCanceledOrder,
    // putUserOrderHistory,
}
