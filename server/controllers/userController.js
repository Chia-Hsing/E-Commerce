const sharp = require('sharp')
const Customer = require('../models/customer')

const getUserProfile = (req, res) => {
    const user = req.user

    return res.status(200).json({ status: 'success', user, message: 'Success to get user profile.!' })
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

        return res.status(200).json({ status: 'success', user: req.user, message: 'Success to update user profile!' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const getCustomer = (req, res) => {
    return
}

const postCustomer = async (req, res) => {
    try {
        const customer = new Customer({ user: req.user._id, ...req.body })
        await customer.save(error => {
            if (error) {
                console.log(error)
            }
            return
        })

        return res.json({ status: 'success', customer, message: 'Success to create delivery information!' })
    } catch (error) {
        res.status(500).send(error)
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
    getCustomer,
    postCustomer,
    // getUserOrder,
    // getUserCanceledOrder,
    // putUserOrderHistory,
}
