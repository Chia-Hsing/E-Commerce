class Bag {
    constructor(oldBag) {
        this.bag = oldBag || []
        this.totalQuantity = oldBag.totalQuantity || 0
        this.totalAmount = oldBag.totalAmount || 0
    }

    addItemToBag(item) {
        if (this.bag.length > 0) {
            const id = item._id
            const index = this.bag.findIndex(i => i.item._id === id)

            if (index === -1) {
                this.addItem(item)
            } else {
                this.updateItem(item)
            }
        } else {
            this.addItem(item)
        }
    }

    removeItemFromBag() {}
    cleanBag() {}

    addItem(item) {
        this.bag = [...this.bag, { item }]
    }
    updateItem() {}
    removeItem() {}
}

const calculator = {}
