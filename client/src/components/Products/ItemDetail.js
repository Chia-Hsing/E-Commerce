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
                    <strong>{props.product.price}</strong>
                </div>
                <div className="detailBody">
                    <select className="sizeSelector" onChange={e => props.getStock(e)}>
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

                    {props.quantity !== undefined ? (
                        <ul className="productPurchaseController">
                            <li onClick={() => props.onDeleteProductHandler(props.product._id)}>{icons.minus()}</li>
                            <li>
                                <span>{props.quantity}</span>
                            </li>
                            <li onClick={() => props.onAddProductHandler(props.product._id)}>{icons.plus()}</li>
                        </ul>
                    ) : (
                        <button
                            disabled={props.canBePurchased}
                            onClick={() => props.onAddProductHandler(props.product._id)}
                        >
                            add to bag
                        </button>
                    )}

                    {props.itemStock === 0 ? null : props.realItemStock === undefined ? (
                        <span>stock: {props.itemStock}</span>
                    ) : (
                        <span>stock: {props.realItemStock}</span>
                    )}
                </div>
                <p>{props.product.description}</p>
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
