import { React, Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from '../store/actions/index'
import ItemDetail from '../components/Products/ItemDetail'
import { arrayBufferToBase64Img } from '../utils/utilities'

class Product extends Component {
    onGetProduct = () => {
        const PID = this.props.match.params.PID
        this.props.onGetProduct(PID)
    }

    componentDidMount() {
        this.onGetProduct()
    }

    componentDidUpdate(prevProps, PrevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.history.replace(`/products${this.props.location.search}`)
        }
    }

    render() {
        let product = null

        // determine the product object returning is not empty.
        if (Object.keys(this.props.product).length > 0) {
            const imgBuffer = this.props.product.image.data
            const img = arrayBufferToBase64Img(imgBuffer)

            product = (
                <>
                    <ItemDetail product={this.props.product} img={img} />
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
