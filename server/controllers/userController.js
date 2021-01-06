const getUserProfile = (req, res) => {
    const user = req.user

    return res.status(200).json({ status: 'success', user, message: 'get user profile success!' })
}

const patchUserProfile = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        updates.forEach(update => (req.user[update] = req.body[update]))

        const buffer = await sharp(req.file.buffer).resize({ width: 300, height: 200 }).png().toBuffer()
        console.log(buffer)

        if (!req.file) {
            console.log(1)
            await req.user.save(error => {
                if (error) {
                    console.log(error)
                    return
                }
            })
        } else if (req.file) {
            console.log(2)
            const buffer = await sharp(req.file.buffer).resize({ width: 300, height: 200 }).png().toBuffer()
            console.log(buffer)
            const updatedUser = { ...req.user, avatar: buffer }

            console.log(4)
            await updatedUser.save(error => {
                if (error) {
                    console.log(error)
                    return
                }
            })
        }

        return res.status(200).json({ status: 'success', user, message: 'patch user profile success!' })
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
