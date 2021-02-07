import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import CheckoutSummary from '../components/Order/CheckoutSummary'
import CheckoutInfo from '../components/Order/CheckoutInfo'
import * as actions from '../store/actions/index'
import '../scss/checkout.scss'

class Checkout extends Component {
    state = {
        currentSelectedId: null,
    }

    async componentDidMount() {
        await this.props.onSetOrder()
        await this.props.onGetUserProfile()
        await this.props.onGetDeliveryInfo()
    }

    onTickHandler = e => {
        const val = e.currentTarget.value

        this.setState({ currentSelectedId: val }, () => {
            const selectedShippingDetail = this.props.deliveryInfoList.filter(info => {
                return this.state.currentSelectedId === info._id
            })

            this.props.onAddShippingDetail(selectedShippingDetail[0])
        })
    }

    cancelCheckout = (items, totalAmount, totalQuantity, shippingDetail) => {
        if (window.confirm('Do you really want to cancel this order?')) {
            const order = { items, totalAmount, totalQuantity, shippingDetail }

            this.props.onPostOrder(order, 'canceled')
            this.props.onCleanBag()
            this.props.history.push('/')
        }
    }

    render() {
        let checkoutSummary = (
            <section className="checkoutItemsWrap">
                <div className="checkoutItemsContainer">
                    <div className="checkoutItems">
                        <CheckoutSummary bagItems={this.props.bagItems} />
                    </div>
                </div>
                <h6 className="itemsTotal">ITEMS TOTAL: ￥{this.state.totalAmount}</h6>
            </section>
        )

        let checkoutInfo = (
            <section className="checkoutInfoWrap">
                <CheckoutInfo
                    username={this.props.userProfile.name}
                    email={this.props.userProfile.email}
                    deliveryInfoList={this.props.deliveryInfoList}
                    ticked={this.onTickHandler}
                    selectedId={this.state.currentSelectedId}
                />
            </section>
        )
        return (
            <>
                {!this.props.isAuthenticated && <Redirect to="/auth/login" />}
                <section className="checkout">
                    <h4>CHECKOUT SUMMARY</h4>
                    {checkoutSummary}
                    {checkoutInfo}
                    <div className="buttonGround">
                        {this.props.deliveryInfoList.length <= 0 ? null : <button id="pay">pay</button>}

                        <button
                            id="cancel"
                            onClick={() =>
                                this.cancelCheckout(
                                    this.props.items,
                                    this.props.totalAmount,
                                    this.props.totalQuantity,
                                    this.props.shippingDetail
                                )
                            }
                        >
                            cancel
                        </button>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        bagItems: state.bag.bagItems,
        totalAmount: state.bag.totalAmount,
        totalQuantity: state.bag.totalQuantity,
        items: state.order.items,
        userProfile: state.user.userProfile,
        deliveryInfoList: state.user.deliveryInfoList,
        shippingDetail: state.order.shippingDetail,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetOrder: () => dispatch(actions.setOrder()),
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onGetDeliveryInfo: () => dispatch(actions.getDeliveryInfo()),
        onAddShippingDetail: detail => dispatch(actions.addShippingDetail(detail)),
        onPostOrder: (order, status) => dispatch(actions.postOrder(order, status)),
        onCleanBag: () => dispatch(actions.cleanBag()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout))
