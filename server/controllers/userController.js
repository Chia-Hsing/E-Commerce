const sharp = require('sharp')
const DeliveryInfo = require('../models/deliveryInfo')
const Order = require('../models/order')

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

const getDeliveryInfo = async (req, res) => {
    try {
        const deliveryInfoList = await DeliveryInfo.find({ user: req.user._id })
        if (!deliveryInfoList) {
            return res.json({ status: 'error', message: 'Unable to recognize current user!' })
        }
        return res
            .status(200)
            .json({ status: 'success', deliveryInfoList, message: 'Success to get the delivery information list!' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const postDeliveryInfo = async (req, res) => {
    try {
        const deliveryInfoList = new DeliveryInfo({ user: req.user._id, ...req.body })
        await deliveryInfoList.save(error => {
            if (error) {
                console.log(error)
            }
            return
        })

        return res
            .status(200)
            .json({ status: 'success', deliveryInfoList, message: 'Success to create delivery information!' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteDeliveryInfo = async (req, res) => {
    const DID = req.params.DID

    try {
        await DeliveryInfo.deleteOne({ _id: DID })

        res.status(200).json({ status: 'success', message: 'Delete delivery information success!' })
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateDeliveryInfo = async (req, res) => {
    const DID = req.params.DID

    try {
        await DeliveryInfo.findOneAndUpdate({ _id: DID }, { ...req.body }, { new: true })

        res.status(200).json({
            status: 'success',
            message: 'Update delivery information success!',
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

const getUserOrder = async (req, res) => {
    const userId = req.user._id

    const userOrder = await Order.find({ customer: userId }).select([
        'items',
        'totalAmount',
        'totalQuantity',
        '_id',
        'paymentStatus',
    ])

    return res.status(200).json({ status: 'success', userOrder, message: 'Get user Orders success!' })
}

module.exports = {
    getUserProfile,
    patchUserProfile,
    getDeliveryInfo,
    postDeliveryInfo,
    deleteDeliveryInfo,
    updateDeliveryInfo,
    getUserOrder,
}
