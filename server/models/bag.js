module.exports = class Bag {
    constructor(oldBag) {
        this.bag = oldBag || []
        this.totalQuantity = oldBag.totalQuantity || 0
        this.totalAmount = oldBag.totalAmount || 0
    }

    addItemToBag(product, itemSize, itemStock) {
        // if there is something in the bag.
        if (this.bag.length > 0) {
            // take the exact item from the bag by using product id and size.
            const index = this.bag.findIndex(item => {
                return item.item._id == product._id && item.itemSize === itemSize
            })

            // if there is no such product in the bag.
            if (index === -1) {
                // add one to the bag.
                this.addItem(product, itemSize, itemStock)
            } else {
                // when the product quantity greater than the item stock, make the plus operation unavailable.
                if (this.bag[index].quantity === itemStock) {
                    return
                }

                // otherwise, add that product to the bag.
                this.updateItem(product._id, '+')
            }
        } else {
            this.addItem(product, itemSize, itemStock)
        }
    }

    deleteItemFromBag(id, itemSize) {
        if (this.bag.length > 0) {
            const index = this.bag.findIndex(item => {
                return item.item._id == id && item.itemSize === itemSize
            })

            // make the product quantity removed when it less than one.
            if (this.bag[index].quantity === 1) {
                return this.removeItem(id, itemSize)
            }

            if (index !== -1) {
                this.updateItem(id, '-')
            }
        }
    }

    cleanBag() {
        this.bag = []
        this.totalAmount = 0
        this.totalQuantity = 0
    }

    addItem(item, itemSize, itemStock) {
        this.bag = [...this.bag, { item, quantity: 1, itemSize, itemStock: itemStock - 1 }]
        this.totalAmount = totalAmount(this.bag)
        this.totalQuantity = totalQuantity(this.bag)
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
        this.totalAmount = totalAmount(this.bag)
        this.totalQuantity = totalQuantity(this.bag)
    }

    removeItem(id, itemSize) {
        const bag = this.bag.filter(products => products.item._id != id && products.itemSize === itemSize)
        this.bag = bag
        this.totalAmount = totalAmount(this.bag)
        this.totalQuantity = totalQuantity(this.bag)
    }
}

const totalAmount = bag => {
    let totalAmount = bag
        .map(item => {
            const price = item.item.price.replace('￥', '').split(',').join('')
            const itemAmount = +price * item.quantity
            return itemAmount
        })
        .reduce((a, c) => {
            return a + c
        }, 0)

    return totalAmount
}

const totalQuantity = bag => {
    let totalQuantity = bag
        .map(item => {
            return item.quantity
        })
        .reduce((a, c) => {
            return a + c
        }, 0)

    return totalQuantity
}
