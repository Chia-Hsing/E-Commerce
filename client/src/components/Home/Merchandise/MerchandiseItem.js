import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../../../scss/merchandise.scss'

const MerchandiseItem = props => {
    return (
        <Link to={`/products/product/${props._id}`}>
            <div className="MerchandiseItem">
                <div className="imgContainer">
                    <img src={props.img} alt="" />
                </div>
                <div className="details">
                    <h6>{props.name}</h6>
                    <span>
                        <strong>{props.price}</strong>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default MerchandiseItem

MerchandiseItem.prototypes = {
    _id: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
}
