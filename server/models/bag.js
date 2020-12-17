module.exports = class Bag {
    constructor(oldBag) {
        this.bag = oldBag || []
        this.totalQuantity = oldBag.totalQuantity || 0
        this.totalAmount = oldBag.totalAmount || 0
    }

    addItemToBag(product) {
        // if there is something in the bag.
        if (this.bag.length > 0) {
            const index = this.bag.findIndex(item => {
                return item.item._id == product._id
            })

            if (index === -1) {
                this.addItem(product)
            } else {
                console.log('hi')
                this.updateItem(product._id, '+')
            }
        } else {
            this.addItem(product)
        }
    }
    removeItemFromBag() {}
    cleanBag() {}

    addItem(item) {
        this.bag = [...this.bag, { item, quantity: 1 }]
    }
    updateItem(id, operator) {
        const bag = this.bag.map(products =>
            products.item._id == id
                ? (products = {
                      ...products,
                      quantity: operator === '+' ? products.quantity + 1 : products.quantity - 1,
                  })
                : products
        )
        this.bag = bag
    }
    removeItem() {}
}

const calculator = {}
