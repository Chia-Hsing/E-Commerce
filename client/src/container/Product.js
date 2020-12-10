import { React, Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'
import ItemDetail from '../components/Products/ItemDetail'
import { arrayBufferToBase64Img } from '../utils/utilities'

class Product extends Component {
    OnGetProduct = () => {
        const PID = this.props.match.params.PID
        this.props.onGetProduct(PID)
    }

    componentDidMount() {
        this.OnGetProduct()
    }

    render() {
        let product = null

        // determine the product object returning is not empty.
        if (Object.keys(this.props.product).length > 0) {
            const imgBuffer = this.props.product.image.data
            const img = arrayBufferToBase64Img(imgBuffer)

            product = (
                <section>
                    <ItemDetail product={this.props.product} img={img} />
                </section>
            )
            console.log(this.props.product.image)
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)
