import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CheckoutSummary from '../components/Order/CheckoutSummary'
import '../scss/checkout.scss'

class Checkout extends Component {
    componentDidMount() {}

    itemsTotal = items => {
        const totalPrice = items
            .map(product => {
                return parseInt(product.item.price.replace('￥', '').split(',').join(''))
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        return totalPrice
    }

    render() {
        return (
            <>
                <section className="checkoutItems">
                    {!this.props.isAuthenticated && <Redirect to="/auth/login" />}
                    <CheckoutSummary bagItems={this.props.bagItems} />
                </section>
                <div className="itemsTotal">ITEMS TOTAL: ￥{this.itemsTotal(this.props.bagItems)}</div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        bagItems: state.bag.bagItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
