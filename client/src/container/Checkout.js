import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CheckoutInfo from '../components/Order/CheckoutInfo'

class Checkout extends Component {
    componentDidMount() {}

    render() {
        return (
            <section>
                {!this.props.isAuthenticated && <Redirect to="/auth/login" />}
                <CheckoutInfo />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
