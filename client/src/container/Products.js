import { React, Component } from 'react'
import { connect } from 'react-redux'
// import Swal from 'sweetalert2'
import { alert } from '../utils/utilities'

import * as actions from '../store/actions/index'
import SingleItem from '../components/Products/SingleItem'
import '../scss/products.scss'

class Products extends Component {
    state = {
        // determine what current page is.
        page: 0,
    }

    // trigger api handler to get products information from backend.
    getProductsHandler = () => {
        try {
            // take the search query content from url.
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

            // add one to state.page before every time request the products, until page equal to totalpages.
            this.setState(
                prevState => ({
                    page: prevState.page + 1,
                }),
                () => {
                    this.props.onGetProducts(gender, category, pageItemsLimit, this.state.page)
                }
            )
        } catch (e) {}
    }

    componentDidMount() {
        // initialize state before page mounting.
        this.setState({ page: 0 }, () => {
            this.props.onInitProducts()
            this.getProductsHandler()
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            this.setState({ page: 0 }, () => {
                this.props.onInitProducts()
                this.getProductsHandler()
            })
        }
    }

    // regarding image response, the backend returns the type of array buffer, so need a converter to convert it to a readable string.
    arrayBufferToBase64Img = buffer => {
        // Creates a new Uint8Array object, and fromCharCode() returns a string created from the specified sequence of UTF-16 code units
        const str = String.fromCharCode(...new Uint8Array(buffer))
        // The btoa() method encodes a string in base-64.
        return `data:image/jpeg;base64,${window.btoa(str)}`
    }

    onAlertHandler = () => {
        alert
            .fire({
                title: 'Oops...',
                text: this.props.error,
                icon: 'warning',
                iconHtml: '!!',
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
        let products = null
        let moreProductsButton = null

        // if the content of product array greater than 1 ( 1 is the 'no item notification.)
        if (this.props.products.length > 1) {
            products = this.props.products.map((product, i) => {
                const img = this.arrayBufferToBase64Img(product.image.data)
                return <SingleItem key={i} name={product.name} img={img} price={product.price} />
            })

            moreProductsButton =
                this.props.totalPages === 0 || this.state.page === this.props.totalPages ? null : (
                    <button
                        className="button"
                        onClick={() => {
                            this.getProductsHandler()
                        }}
                    >
                        more items
                    </button>
                )
        } else if (this.props.products.length === 1) {
            products = this.props.products.map(info => {
                return (
                    <div key={info} className="no-item">
                        <span>{info}</span>
                    </div>
                )
            })
        }

        if (this.props.error) {
            this.onAlertHandler()
            this.props.history.push('/')
        }

        return (
            <section>
                <div className="products-container">{products}</div>
                {moreProductsButton}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalPages: state.products.totalPages,
        products: state.products.products,
        loading: state.products.loading,
        error: state.products.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProducts: () => dispatch(actions.initProducts()),
        onGetProducts: (gd, cg, pil, pg) => dispatch(actions.getProducts(gd, cg, pil, pg)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
