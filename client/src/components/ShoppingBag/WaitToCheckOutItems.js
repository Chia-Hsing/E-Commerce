import React from 'react'

import { icons } from '../../utils/icons'

const WaitToCheckOutItems = props => {
    return (
        <section>
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.itemSize}</span>
            <span>{props.quantity}</span>
            <ul className="productPurchaseController">
                <li onClick={() => props.onDeleteItemFromBag(props._id, props.itemSize)}>{icons.minus()}</li>
                <li>
                    <span>{props.quantity}</span>
                </li>
                <li onClick={() => props.onAddItemToBag(props._id, props.itemStock, props.itemSize)}>{icons.plus()}</li>
            </ul>
        </section>
    )
}

export default WaitToCheckOutItems
