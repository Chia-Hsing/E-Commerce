import { React, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import WaitToCheckOutItems from '../components/ShoppingBag/WaitToCheckOutItems'
import * as actions from '../store/actions/index'

class ShoppingBag extends Component {
    componentDidMount() {
        this.props.onSetBagItems()
    }

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

    render() {
        let checkOutItems =
            this.props.bagItems.length > 0 ? (
                this.props.bagItems.map(product => {
                    return (
                        <>
                            <WaitToCheckOutItems
                                key={product.item._id}
                                name={product.item.name}
                                price={product.item.price}
                                id={product.item._id}
                                itemSize={product.itemSize}
                                itemStock={product.itemStock}
                                quantity={product.quantity}
                                addProductHandler={this.onAddProductHandler}
                                deleteItemFromBag={this.onDeleteProductHandler}
                                removeItem={this.props.onRemoveWholeItem}
                                cleanBag={this.props.onCleanBag}
                            />
                        </>
                    )
                })
            ) : (
                <div>
                    <span>
                        You shopping bag is empty! <Link to="/"> Let's go shopping!</Link>
                    </span>
                </div>
            )

        return (
            <section>
                {checkOutItems}
                <div>
                    <span>{this.props.totalQuantity}</span>
                </div>
                <div>
                    <span>{this.props.totalAmount}</span>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        bagItems: state.bag.bagItems,
        totalQuantity: state.bag.totalQuantity,
        totalAmount: state.bag.totalAmount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddItemToBag: (id, itemStock, itemSize) => dispatch(actions.addItemToBag(id, itemStock, itemSize)),
        onDeleteItemFromBag: (id, itemSize) => dispatch(actions.deleteItemFromBag(id, itemSize)),
        onSetBagItems: () => dispatch(actions.setBagItems()),
        onRemoveWholeItem: (id, itemSize) => dispatch(actions.removeWholeItem(id, itemSize)),
        onCleanBag: () => dispatch(actions.cleanBag()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)
