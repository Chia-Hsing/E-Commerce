import { React, Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../store/actions/index'
import ItemDetail from '../components/Products/ItemDetail'
import { arrayBufferToBase64Img } from '../utils/utilities'

class Product extends Component {
    state = {
        itemStock: 0,
        itemSize: null,
        disablePurchase: true,
    }

    // get product detail from api and check bag on localStorage.
    async componentDidMount() {
        const PID = this.props.match.params.PID
        this.props.onGetProduct(PID)
        await this.props.onSetBagItems()
    }

    // make sure the route work properly.
    componentDidUpdate(prevProps, PrevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.history.replace(`/products${this.props.location.search}`)
        }
    }

    // get stock from selected option (size).
    getStock = e => {
        e.preventDefault()
        const index = e.nativeEvent.target.selectedIndex
        // add + to ensure the value passed by props is number.
        this.setState({ itemStock: +e.target.value, itemSize: e.nativeEvent.target[index].text }, () => {
            if (this.state.itemStock > 0) {
                this.setState({ disablePurchase: false })
            } else {
                this.setState({ disablePurchase: true })
            }
        })
    }

    // add the quantity by one to the shopping bag.
    onAddProductHandler = () => {
        // this product's id
        const id = this.props.product._id
        // check out if the same product item in the shopping bag.
        const inBagItem = this.isInBag(id)
        // if the stock left great than the item stock you selected, or you do not select yet.
        if (this.state.itemStock > inBagItem.qty || inBagItem.qty === undefined) {
            this.props.onAddItemToBag(id)
        }
    }

    // use id to get the product items selected in the shopping bag that came from local storage.
    isInBag = id => {
        // if that bag not empty
        if (Object.keys(this.props.bagItems).length) {
            // get the item you selected by id.
            this.props.bagItems.filter(item => {
                return item.items.bag.bag[0]._id === id
            })
        }
        return {}
    }

    render() {
        let product = null

        // determine the product object returning is not empty.
        if (Object.keys(this.props.product).length > 0) {
            // convert binary data to base64 image format.
            const imgBuffer = this.props.product.image.data
            const img = arrayBufferToBase64Img(imgBuffer)

            product = (
                <>
                    <ItemDetail
                        product={this.props.product}
                        img={img}
                        getStock={this.getStock}
                        itemStock={this.state.itemStock}
                        canBePurchased={this.state.disablePurchase}
                        onAddProductHandler={this.onAddProductHandler}
                    />
                </>
            )
        }

        return <>{product}</>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetProduct: PID => dispatch(actions.getProduct(PID)),
        onAddItemToBag: id => dispatch(actions.addItemToBag(id)),
        onSetBagItems: () => dispatch(actions.setBagItems()),
    }
}

const mapStateToProps = state => {
    return {
        product: state.products.product,
        bagItems: state.bag.bagItems,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))

Product.propTypes = {
    product: PropTypes.object,
    onGetProduct: PropTypes.func,
}
