import React from 'react'

const UserOrderItem = props => {
    return (
        <div>
            <span>{props.item.item.name}</span>
            <span>{props.item.size}</span>
            <span>{props.item.quantity}</span>
        </div>
    )
}

export default UserOrderItem
