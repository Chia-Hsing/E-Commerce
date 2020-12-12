import React from 'react'
import PropTypes from 'prop-types'

import '../../scss/product.scss'

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
                    <select onChange={e => props.getStock(e)}>
                        <option value={0}> - size - </option>
                        {props.product.stock.map(item => {
                            const size = Object.keys(item)
                            const stock = Object.values(item)
                            return (
                                <option key={size} value={stock}>
                                    {size}
                                </option>
                            )
                        })}
                    </select>
                    {props.itemStock === 0 ? null : <span>stock: {props.itemStock}</span>}

                    <button disabled={props.canBePurchased}>add to bag</button>
                    <p>{props.product.description}</p>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail

ItemDetail.propTypes = {
    img: PropTypes.string,
    product: PropTypes.object,
    itemStock: PropTypes.number,
    getStock: PropTypes.func,
}
