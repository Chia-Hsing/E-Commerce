import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CheckoutSummary from '../components/Order/CheckoutSummary'

class Checkout extends Component {
    componentDidMount() {}

    render() {
        return (
            <section>
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

export default connect(mapStateToProps)(Checkout)
