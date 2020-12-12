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
        disablePurchase: true,
    }

    // get product detail from api.
    onGetProduct = () => {
        const PID = this.props.match.params.PID
        this.props.onGetProduct(PID)
    }

    componentDidMount() {
        this.onGetProduct()
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
        // add + to ensure the value passed by props is number.
        this.setState({ itemStock: +e.target.value }, () => {
            if (this.state.itemStock > 0) {
                this.setState({ disablePurchase: false })
            } else {
                this.setState({ disablePurchase: true })
            }
        })
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
                        getStock={this.getStock}
                        itemStock={this.state.itemStock}
                        product={this.props.product}
                        img={img}
                        canBePurchased={this.state.disablePurchase}
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
    }
}

const mapStateToProps = state => {
    return {
        product: state.products.product,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product))

Product.propTypes = {
    product: PropTypes.object,
    onGetProduct: PropTypes.func,
}
