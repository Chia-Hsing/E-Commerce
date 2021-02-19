import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import UserProfileCard from '../components/User/UserProfileCard'
import UserOrderNav from '../components/User/UserOrderNav'
import UserOrderItem from '../components/User/UserOrderItem'
import { arrayBufferToBase64Img } from '../utils/utilities'
import Spinner from '../components/UI/Spinner'
import * as actions from '../store/actions/index'
import '../scss/orderManagement.scss'

class OrderManagement extends Component {
    state = { selectedOrder: [] }

    async componentDidMount() {
        await this.props.onGetUserProfile()
        await this.props.onGetUserOrder()

        const orders = this.props.userOrder.filter(order => {
            return order.paymentStatus === 'canceled'
        })

        this.setState({ selectedOrder: orders })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            const search = this.props.location.search
            const query = new URLSearchParams(search)

            for (let param of query.entries()) {
                const orderStatus = param[1]
                const orders = this.props.userOrder.filter(order => {
                    return order.paymentStatus === orderStatus
                })

                this.setState({ selectedOrder: orders })
            }
        }
    }

    render() {
        let avatarImg = null

        if (this.props.userProfile.avatar) {
            const imgBuffer = this.props.userProfile.avatar.data
            avatarImg = arrayBufferToBase64Img(imgBuffer)
        } else {
            avatarImg = 'https://i.pinimg.com/564x/a6/f3/c5/a6f3c55ace829310723adcb7a468869b.jpg'
        }

        const userProfileCard = <UserProfileCard avatar={avatarImg} name={this.props.userProfile.name} />

        let userOrderList = this.state.selectedOrder.map((order, i) => {
            return (
                <div key={i} className="orderDetailItem">
                    <div className="productBody">
                        <div>
                            {order.items.map((item, i) => {
                                return <UserOrderItem key={i} item={item} />
                            })}
                        </div>
                        <div className="total">
                            <span id="totalQuantity">items: {order.totalQuantity}</span>
                            <span id="totalAmount">amount: {order.totalAmount}</span>
                        </div>
                    </div>
                    <button onClick={this.props.onReorder}>reorder</button>
                </div>
            )
        })

        let userOrder = <Spinner />

        if (this.props.userOrder.length > 0) {
            userOrder = (
                <>
                    <h4>ACCOUNT DASHBOARD</h4>
                    <div className="orderContainer">
                        {userProfileCard}
                        <div className="orderDetail">
                            <UserOrderNav />
                            {userOrderList}
                        </div>
                    </div>
                </>
            )
        }

        return <section className="userProfileWrap">{userOrder}</section>
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        userProfile: state.user.userProfile,
        userOrder: state.user.userOrder,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onGetUserOrder: () => dispatch(actions.getUserOrder()),
        onReorder: () => dispatch(actions.reorder()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderManagement))
