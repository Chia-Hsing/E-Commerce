import React from 'react'

const SingleItem = props => {
    return (
        <div className="single-item">
            <div id="itemImg">
                <img src={props.img} alt="" />
            </div>
            <span>{props.name}</span>
            <span>
                <strong>{props.price}</strong>
            </span>
        </div>
    )
}

export default SingleItem
