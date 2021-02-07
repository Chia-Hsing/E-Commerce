import React from 'react'

import CheckoutItem from '../Order/CheckoutItem'

const CheckoutSummary = props => {
    const checkoutItems = props.bagItems.map(product => {
        return (
            <CheckoutItem
                key={Math.random()}
                name={product.item.name}
                price={product.item.price}
                quantity={product.quantity}
                id={product.item._id}
                itemSize={product.itemSize}
            />
        )
    })

    return (
        <>
            <div className="checkOutHeader">
                <span>items</span>
                <span>size</span>
                <span>price</span>
                <span>quantity</span>
                <span>edit</span>
            </div>
            {checkoutItems}
        </>
    )
}

export default CheckoutSummary
