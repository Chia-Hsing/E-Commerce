import React from 'react'

const SingleItem = props => {
    return (
        <div>
            <img src={`data:image/png;base64,${props.img}`} alt="" />
            <span>{props.name}</span>
            <span>{props.price}</span>
        </div>
    )
}

export default SingleItem
