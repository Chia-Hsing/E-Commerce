import React from 'react'
import '../../styles/merchandise.scss'
import d from '../../assets/img/4.jpg'

const MerchandiseItem = props => {
    return (
        <div className="MerchandiseItem">
            <img src={d} alt="" />
            <div className="details">
                <h5>Brand</h5>
                <h6>Name</h6>
                <span>Price</span>
            </div>
        </div>
    )
}

export default MerchandiseItem
