import { React, Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'
import SingleItem from '../components/Products/SingleItem'

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

            this.props.history.push(`/products?gender=${gender}&category=${category}`)

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
        let products
        let moreProductsButton

        if (this.props.products) {
            products = this.props.products.map((product, i) => {
                return <SingleItem key={i} name={product.name} img={product.image.data} price={product.price} />
            })
            moreProductsButton =
                this.state.page === this.props.totalPages || this.props.totalPages === 0 ? null : (
                    <button
                        onClick={() => {
                            this.getProductsHandler()
                        }}
                    >
                        click
                    </button>
                )
        }

        return (
            <section>
                {products}
                {moreProductsButton}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
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
