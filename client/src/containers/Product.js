import { React, Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../store/actions/index'
import ItemDetail from '../components/Products/ItemDetail'
import { arrayBufferToBase64Img, alert } from '../utils/utilities'
import Spinner from '../components/UI/Spinner'

class Product extends Component {
    state = {
        itemStock: -1,
        itemSize: null,
        disablePurchase: true,
    }

    // get product detail from api and check if there is a bag on localStorage, set it to state.
    async componentDidMount() {
        const PID = this.props.match.params.PID
        this.props.onInitProduct()
        this.props.onGetProduct(PID)
    }

    // make sure the route works properly by comparing two pathnames.
    componentDidUpdate(prevProps, PrevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.history.replace(`/products${this.props.location.search}`)
        }
    }

    // get stock from selected option (size).
    getStock = e => {
        e.preventDefault()
        const index = e.nativeEvent.target.selectedIndex
        // add + to ensure the value passed is number.
        this.setState({ itemStock: +e.target.value, itemSize: e.nativeEvent.target[index].text }, () => {
            // if itemStock greater than 0, make the purchase button available.
            if (this.state.itemStock > 0) {
                this.setState({ disablePurchase: false })
            } else {
                this.setState({ disablePurchase: true })
            }
        })
    }

    // add the quantity of a product by one to the shopping bag.
    onAddProductHandler = () => {
        // this product's id
        const PID = this.props.product._id

        // check out if there is a product same as this product in the shopping bag.
        const inBagItem = this.isInBag(PID)

        // if the stock left great than the item stock selected, or yet select.
        if (this.state.itemStock > inBagItem.realItemStock || inBagItem.realItemStock === undefined) {
            if (this.state.itemStock !== 0 && this.state.itemSize !== null) {
                this.props.onAddItemToBag(PID, this.state.itemStock, this.state.itemSize)
            }
        }
    }

    // minus the quantity of a product by one from the shopping bag.
    onDeleteProductHandler = () => {
        const PID = this.props.product._id
        const itemSize = this.state.itemSize
        this.props.onDeleteItemFromBag(PID, itemSize)
    }

    // use id to get the product items same as the selected one in the shopping bag coming from local storage.
    isInBag = id => {
        // if that bag not empty
        if (this.props.bagItems.length) {
            // get the item you selected by id and size.
            // bagItems: [ {item:..., quantity:..., itemSize:..., realItemStock:... }, {} ]
            const thisProduct = this.props.bagItems.filter(
                item => item.item._id === id && item.itemSize === this.state.itemSize
            )

            return thisProduct.length ? thisProduct[0] : []
        }
        return {}
    }

    errorAlertHandler = msg => {
        alert
            .fire({
                title: 'Oops...',
                text: msg,
                icon: 'warning',
                iconHtml: '!',
                iconColor: '#2a2c30',
                confirmButtonText: 'redirect to homepage',
            })
            .then(result => {
                if (result.isConfirmed) {
                    this.props.history.push('/')
                }
            })
    }

    render() {
        let product = <Spinner loading={this.props.loading} />

        if (this.props.error) {
            this.errorAlertHandler(this.props.error)
            this.props.history.push('/')
        }

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
                        realItemStock={this.isInBag(this.props.product._id).realItemStock}
                        quantity={this.isInBag(this.props.product._id).quantity}
                        canBePurchased={this.state.disablePurchase}
                        onAddProductHandler={() => this.onAddProductHandler(this.props.product.id)}
                        onDeleteProductHandler={() => this.onDeleteProductHandler(this.props.product.id)}
                    />
                </>
            )
        }

        return <section className="productContainer">{product}</section>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProduct: () => dispatch(actions.initProduct()),
        onGetProduct: PID => dispatch(actions.getProduct(PID)),
        onAddItemToBag: (PID, itemStock, itemSize) => dispatch(actions.addItemToBag(PID, itemStock, itemSize)),
        onDeleteItemFromBag: (PID, itemSize) => dispatch(actions.deleteItemFromBag(PID, itemSize)),
    }
}

const mapStateToProps = state => {
    return {
        product: state.products.product,
        loading: state.products.loading,
        bagItems: state.bag.bagItems,
        error: state.products.error,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))

Product.propTypes = {
    product: PropTypes.object,
    onGetProduct: PropTypes.func,
}
