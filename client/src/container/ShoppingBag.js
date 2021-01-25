import { React, Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import CheckOutItem from '../components/ShoppingBag/CheckOutItem'
import * as actions from '../store/actions/index'
import '../scss/shoppingBag.scss'

class ShoppingBag extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.bagItems !== nextProps.bagItems) {
            return true
        }
        return false
    }

    onAddProductHandler = (id, itemStock, itemSize) => {
        if (itemStock > 0) {
            this.props.onAddItemToBag(id, itemStock, itemSize)
        }
    }

    onDeleteProductHandler = (id, quantity, itemSize) => {
        if (quantity > 1) {
            this.props.onDeleteItemFromBag(id, itemSize)
        }
    }

    onCheckout = () => {
        this.props.onPostOrder(this.props.UID)
        this.props.history.push('/checkout')
    }

    render() {
        let checkOutItems =
            this.props.bagItems.length > 0 ? (
                this.props.bagItems.map(product => {
                    return (
                        <CheckOutItem
                            key={Math.random()}
                            name={product.item.name}
                            price={product.item.price}
                            id={product.item._id}
                            itemSize={product.itemSize}
                            itemStock={product.itemStock}
                            quantity={product.quantity}
                            addItemToBag={() =>
                                this.onAddProductHandler(product.item._id, product.itemStock, product.itemSize)
                            }
                            deleteItemFromBag={() =>
                                this.onDeleteProductHandler(product.item._id, product.quantity, product.itemSize)
                            }
                            removeItem={() => this.props.onRemoveWholeItem(product.item._id, product.itemSize)}
                        />
                    )
                })
            ) : (
                <div className="empty">
                    <h4>Your shopping bag is empty !</h4>
                    <div className="link">
                        <Link to="/"> Let's go shopping ...</Link>
                    </div>
                </div>
            )

        let checkout =
            this.props.totalQuantity > 0 ? (
                <div className="checkOut">
                    <span onClick={this.onCheckout}>CHECK OUT</span>
                    <Link to="/">CONTINUE SHOPPING</Link>
                </div>
            ) : null

        return (
            <section className="ShoppingBagContainer">
                <div className="ShoppingBagHeader">
                    <h4>Shopping Bag</h4>
                    <span onClick={() => this.props.onCleanBag()}>Clean this Bag</span>
                </div>
                <div className="checkOutItemWrap">{checkOutItems}</div>

                <div className="checkOutSummary">
                    <span>ITEMS: {this.props.totalQuantity}</span>
                    <span>SUBTOTAL: ￥{this.props.totalAmount}</span>
                </div>
                {checkout}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        bagItems: state.bag.bagItems,
        totalQuantity: state.bag.totalQuantity,
        totalAmount: state.bag.totalAmount,
        isPurchasing: state.bag.purchasing,
        UID: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToBag: (id, itemStock, itemSize) => dispatch(actions.addItemToBag(id, itemStock, itemSize)),
        onDeleteItemFromBag: (id, itemSize) => dispatch(actions.deleteItemFromBag(id, itemSize)),
        onRemoveWholeItem: (id, itemSize) => dispatch(actions.removeWholeItem(id, itemSize)),
        onCleanBag: () => dispatch(actions.cleanBag()),
        onPostOrder: id => dispatch(actions.postOrder(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingBag))
