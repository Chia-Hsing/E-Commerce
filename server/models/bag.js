module.exports = class Bag {
    constructor(oldBag) {
        this.bag = oldBag || []
        this.totalQuantity = oldBag.totalQuantity || 0
        this.totalAmount = oldBag.totalAmount || 0
    }

    addItemToBag(product) {
        // if there is something in the bag.
        if (this.bag.length > 0) {
            const index = this.bag.findIndex(item => item._id === product._id)

            if (index === -1) {
                this.addItem(product)
            } else {
                this.updateItem(product)
            }
        } else {
            this.addItem(product)
        }
    }

    removeItemFromBag() {}
    cleanBag() {}

    addItem(item) {
        this.bag = [...this.bag, item]
    }
    updateItem() {}
    removeItem() {}
}

const calculator = {}
