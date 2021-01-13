const sharp = require('sharp')

const getUserProfile = (req, res) => {
    const user = req.user

    return res.status(200).json({ status: 'success', user, message: 'get user profile success!' })
}

const patchUserProfile = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        updates.forEach(update => (req.user[update] = req.body[update]))

        if (!req.file) {
            await req.user.save(error => {
                if (error) {
                    console.log(error)
                    return
                }
            })
        } else if (req.file) {
            const buffer = await sharp(req.file.buffer).resize({ width: 300, height: 200 }).png().toBuffer()
            req.user.avatar = buffer

            await req.user.save(error => {
                if (error) {
                    console.log(error)
                    return
                }
            })
        }

        return res.status(200).json({ status: 'success', user: req.user, message: 'patch user profile success!' })
    } catch (error) {
        res.status(500).send()
    }
}

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
    patchUserProfile,
    // getUserOrder,
    // getUserCanceledOrder,
    // putUserOrderHistory,
}
