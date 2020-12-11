import React from 'react'
import PropTypes from 'prop-types'

const ItemDetail = props => {
    return (
        <section className="productContainer">
            <div className="imgContainer">
                <img src={props.img} alt=""></img>
            </div>
            <div className="detailContainer">
                <div>
                    <h4>{props.product.name}</h4>
                </div>
                <div>
                    <strong>{props.product.price}</strong>
                    <span>{props.product.S}</span>
                    <p>{props.product.description}</p>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail

ItemDetail.propTypes = {
    img: PropTypes.string,
}
