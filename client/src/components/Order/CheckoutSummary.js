import React from 'react'

import CheckoutItem from '../Order/CheckoutItem'

const CheckoutSummary = props => {
    const checkoutItems = props.bagItems.map(product => {
        return (
            <CheckoutItem
                key={Math.random()}
                name={product.item.name}
                price={product.item.price}
                id={product.item._id}
                itemSize={product.itemSize}
                quantity={product.quantity}
            />
        )
    })

    return <div>{checkoutItems}</div>
}

export default CheckoutSummary