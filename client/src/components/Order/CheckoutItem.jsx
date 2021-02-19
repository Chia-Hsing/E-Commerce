import React from 'react'
import { Link } from 'react-router-dom'

import { icons } from '../../utils/icons'

const CheckOutItem = props => {
    return (
        <div className="checkOutItem">
            <span>{props.name}</span>
            <span>{props.itemSize}</span>
            <span>{props.price}</span>
            <span>{props.quantity}</span>
            <Link to="/shopping-bag">
                <span className="editItem">{icons.edit()}</span>
            </Link>
        </div>
    )
}

export default CheckOutItem
