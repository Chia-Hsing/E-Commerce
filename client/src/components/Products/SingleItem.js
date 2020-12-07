import React from 'react'

const SingleItem = props => {
    return (
        <div className="single-item">
            <img src={props.img} alt="" />
            <span>{props.name}</span>
            <span>
                <strong>{props.price}</strong>
            </span>
        </div>
    )
}

export default SingleItem
