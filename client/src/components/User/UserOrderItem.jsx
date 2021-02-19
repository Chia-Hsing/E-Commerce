import React from 'react'

const UserOrderItem = props => {
    return (
        <div className="products">
            <span id="name">{props.item.item.name}</span>
            <span id="size">{props.item.size}</span>
            <span id="quantity">{props.item.quantity}</span>
        </div>
    )
}

export default UserOrderItem
