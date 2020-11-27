import React from 'react'
import '../../../scss/merchandise.scss'
import d from '../../../assets/img/6.jpg'

const MerchandiseItem = props => {
    return (
        <div className="MerchandiseItem">
            <div className="imgContainer">
                <img src={d} alt="" />
            </div>
            <div className="details">
                <h5>
                    <em>Brand</em>
                </h5>
                <h6>Name</h6>
                <span>
                    <strong>Price</strong>
                </span>
            </div>
        </div>
    )
}

export default MerchandiseItem
