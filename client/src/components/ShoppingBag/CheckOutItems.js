import React from 'react'

import { icons } from '../../utils/icons'

const CheckOutItems = props => {
    return (
        <section className="checkOutItem">
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.itemSize}</span>

            <ul className="productPurchaseController">
                <li className="operator" onClick={props.deleteItemFromBag}>
                    <i>{icons.minus()}</i>
                </li>
                <li>
                    <span>{props.quantity}</span>
                </li>
                <li className="operator" onClick={props.addItemToBag}>
                    <i>{icons.plus()}</i>
                </li>
            </ul>
            <div>
                <i className="removeItem" onClick={props.removeItem}>
                    {icons.close()}
                </i>
            </div>
        </section>
    )
}

export default CheckOutItems
