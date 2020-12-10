import React from 'react'
import { Link } from 'react-router-dom'

const SingleItem = props => {
    return (
        <Link to={`/products/product/${props._id}`}>
            <div className="single-item">
                <div id="itemImg">
                    <img src={props.img} alt="" />
                </div>
                <span>{props.name}</span>
                <span>
                    <strong>{props.price}</strong>
                </span>
            </div>
        </Link>
    )
}

export default SingleItem
