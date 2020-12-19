import React from 'react'
import PropTypes from 'prop-types'

import { icons } from '../../utils/icons'
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
                            const stock = item[size]
                            return (
                                <option key={size} value={stock}>
                                    {size}
                                </option>
                            )
                        })}
                    </select>

                    {props.itemStock === 0 ? null : props.realItemStock === undefined ? (
                        <span>stock: {props.itemStock}</span>
                    ) : (
                        <span>stock: {props.realItemStock}</span>
                    )}

                    <button disabled={props.canBePurchased}>add to bag</button>

                    <ul className="productPurchaseController">
                        <li>{icons.minus()}</li>
                        <li>
                            <span className="product-detail-qty">{props.quantity}</span>
                        </li>
                        <li onClick={() => props.onAddProductHandler(props.product._id)}>{icons.plus()}</li>
                    </ul>

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
