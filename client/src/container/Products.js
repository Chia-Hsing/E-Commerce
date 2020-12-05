import { React, Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'

class Products extends Component {
    state = {
        page: 0,
        loading: true,
    }

    getProductsHandler = () => {
        try {
            const query = new URLSearchParams(this.props.location.search)
            const pageItemsLimit = 6
            let gender = null
            let category = null

            for (let param of query.entries()) {
                if (param[0] === 'gender') {
                    gender = param[1]
                } else {
                    category = param[1]
                }
            }

            this.setState(
                prevState => ({
                    page: prevState.page + 1,
                    loading: false,
                }),
                () => {
                    this.props.onGetProducts(gender, category, pageItemsLimit, this.state.page)
                }
            )
        } catch (e) {}
    }

    componentDidMount() {
        this.getProductsHandler()
    }

    render() {
        let moreProductsButton =
            this.state.page !== this.props.totalPages ? (
                <button
                    onClick={() => {
                        this.getProductsHandler()
                    }}
                >
                    click
                </button>
            ) : null

        return <section>1234{moreProductsButton}</section>
    }
}

const mapStateToProps = state => {
    return {
        count: state.products.count,
        totalPages: state.products.totalPages,
        products: state.products.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetProducts: (gd, cg, pil, pg) => dispatch(actions.getProducts(gd, cg, pil, pg)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
