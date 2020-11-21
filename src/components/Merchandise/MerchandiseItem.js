import React from 'react'
import '../../styles/merchandise.scss'
import d from '../../assets/img/4.jpg'

const MerchandiseItem = props => {
    return (
        <div className="MerchandiseItem">
            <img src={d} alt="" />
            <h4>name</h4>
            <span>price</span>
        </div>
    )
}

export default MerchandiseItem
