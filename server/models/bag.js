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
                // make the product quantity unavailable when it greater than item stock.
                if (this.bag[index].quantity === itemStock) {
                    return
                }

                this.updateItem(product._id, '+')
            }
        } else {
            this.addItem(product, itemSize, itemStock)
        }
    }
    removeItemFromBag(id, itemSize) {
        if (this.bag.length > 0) {
            const index = this.bag.findIndex(item => {
                return item.item._id == id && item.itemSize === itemSize
            })

            // make the product quantity unavailable when it less than one.
            if (this.bag[index].quantity === 1) {
                return this.removeItem(id)
            }

            if (index !== -1) {
                this.updateItem(id, '-')
            }
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
                      quantity: operator === '+' ? products.quantity + 1 : products.quantity - 1,
                      itemStock: operator === '+' ? products.itemStock - 1 : products.itemStock + 1,
                  })
                : products
        )
        this.bag = bag
    }
    removeItem(id) {
        const bag = this.bag.filter(products => products.item._id != id)
        this.bag = bag
    }

    totalQuantity(bag) {
        let totalQuantity = bag
            .map(item => {
                console.log(item)
                return item.item.price
            })
            .reduce((a, c) => {
                return a + c
            }, 0)
        return totalQuantity
    }
}
