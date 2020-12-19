module.exports = class Bag {
    constructor(oldBag) {
        this.bag = oldBag || []
        this.totalQuantity = oldBag.totalQuantity || 0
        this.totalAmount = oldBag.totalAmount || 0
    }

    addItemToBag(product, itemSize, itemStock) {
        // if there is something in the bag.
        if (this.bag.length > 0) {
            const index = this.bag.findIndex(item => {
                return item.item._id == product._id && item.itemSize === itemSize
            })

            if (index === -1) {
                this.addItem(product, itemSize, itemStock)
            } else {
                this.updateItem(product._id, '+')
            }
        } else {
            this.addItem(product, itemSize, itemStock)
        }
    }
    removeItemFromBag(product, itemSize, itemStock) {
        if (this.bag.length > 0) {
            const index = this.bag.findIndex(item => {
                return item.item._id == product._id && item.itemSize === itemSize
            })

            if (index === -1) {
                this.addItem(product, itemSize, itemStock)
            } else {
                this.updateItem(product._id, '-')
            }
        } else {
            this.addItem(product, itemSize, itemStock)
        }
    }
    cleanBag() {}

    addItem(item, itemSize, itemStock) {
        this.bag = [...this.bag, { item, quantity: 1, itemSize, itemStock: itemStock - 1 }]
    }

    updateItem(id, operator) {
        const bag = this.bag.map(products =>
            products.item._id == id
                ? (products = {
                      ...products,
                      quantity:
                          products.itemStock <= 0
                              ? products.quantity
                              : operator === '+'
                              ? products.quantity + 1
                              : products.quantity - 1,
                      itemStock:
                          products.itemStock <= 0
                              ? 0
                              : operator === '+'
                              ? products.itemStock - 1
                              : products.itemStock + 1,
                  })
                : products
        )
        this.bag = bag
    }
    removeItem() {}
}

const calculator = {}
