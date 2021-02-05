import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CheckoutSummary from '../components/Order/CheckoutSummary'
import CheckoutInfo from '../components/Order/CheckoutInfo'
import * as actions from '../store/actions/index'
import '../scss/checkout.scss'

class Checkout extends Component {
    async componentDidMount() {
        await this.props.onGetUserProfile()
        await this.props.onGetDeliveryInfo()
    }

    itemsTotal = items => {
        const totalPrice = items
            .map(product => {
                return parseInt(product.item.price.replace('￥', '').split(',').join('')) * +product.quantity
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)

        return totalPrice
    }

    render() {
        let checkoutSummary = (
            <section className="checkoutItemsWrap">
                <div className="checkoutItems">
                    <CheckoutSummary bagItems={this.props.bagItems} />
                </div>
                <div className="itemsTotal">ITEMS TOTAL: ￥{this.itemsTotal(this.props.bagItems)}</div>
            </section>
        )

        let checkoutInfo = (
            <section className="checkoutInfoWrap">
                <CheckoutInfo
                    username={this.props.userProfile.name}
                    email={this.props.userProfile.email}
                    deliveryInfoList={this.props.deliveryInfoList}
                />
            </section>
        )
        return (
            <>
                {!this.props.isAuthenticated && <Redirect to="/auth/login" />}
                {checkoutSummary}
                {checkoutInfo}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        bagItems: state.bag.bagItems,
        userProfile: state.user.userProfile,
        deliveryInfoList: state.user.deliveryInfoList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onGetDeliveryInfo: () => dispatch(actions.getDeliveryInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
