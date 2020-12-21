import React from 'react'

import { icons } from '../../utils/icons'

const WaitToCheckOutItems = props => {
    return (
        <section>
            <div onClick={() => props.cleanBag()}>
                <span>Clean Bag</span>
            </div>
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.itemSize}</span>
            <span>{props.quantity}</span>

            <ul className="productPurchaseController">
                <li onClick={() => props.deleteItemFromBag(props.id, props.quantity, props.itemSize)}>
                    {icons.minus()}
                </li>
                <li>
                    <span>{props.quantity}</span>
                </li>
                <li onClick={() => props.addProductHandler(props.id, props.itemStock, props.itemSize)}>
                    {icons.plus()}
                </li>
            </ul>
            <div onClick={() => props.removeItem(props.id, props.itemSize)}>{icons.close()}</div>
        </section>
    )
}

export default WaitToCheckOutItems
