import { React, Component } from 'react'

import * as apis from '../apis/products'

class Products extends Component {
    state = {
        products: [],
    }

    async componentDidUpdate() {
        const query = new URLSearchParams(this.props.location.search)
        let gender = null
        let category = null

        for (let param of query.entries()) {
            if (param[0] === 'gender') {
                gender = param[1]
            } else {
                category = param[1]
            }
        }
        let page = 1

        const res = await apis.getProducts(gender, category, page)
        console.log(res.data)
    }

    render() {
        return <div>1234</div>
    }
}

export default Products
