import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CheckoutSummary from '../components/Order/CheckoutSummary'
import '../scss/checkout.scss'

class Checkout extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="checkoutItems">
                {!this.props.isAuthenticated && <Redirect to="/auth/login" />}
                <CheckoutSummary bagItems={this.props.bagItems} />
            </section>
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
