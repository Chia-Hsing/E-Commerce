import { React, Component } from 'react'

import * as apis from '../apis/products'

class Products extends Component {
    state = {
        page: 0,
        products: [],
        totalPages: 1,
        count: 0,
        loading: true,
        error: false,
    }

    getProductsHandler = async () => {
        this.changePageHandler()
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

            console.log(this.state.page)
            const res = await apis.getProducts(gender, category, pageItemsLimit, this.state.page)
            const { count, products, totalPages } = res.data.productResponse
            console.log(products)
            this.setState(prevState => ({
                count,
                products: [...prevState.products, ...products],
                totalPages,
                error: false,
                loading: false,
            }))
            console.log(this.state)
        } catch (e) {}
    }

    changePageHandler = () => {
        this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }))
    }

    componentDidMount() {
        this.getProductsHandler()
    }

    render() {
        let moreProductsButton =
            this.state.page !== this.state.totalPages ? (
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

export default Products
