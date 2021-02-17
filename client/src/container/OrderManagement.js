import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import UserProfileCard from '../components/User/UserProfileCard'
import UserOrderBar from '../components/User/UserOrderBar'
import UserOrderItem from '../components/User/UserOrderItem'
import { arrayBufferToBase64Img } from '../utils/utilities'
import * as actions from '../store/actions/index'
import '../scss/orderManagement.scss'

class OrderManagement extends Component {
    state = { selectedOrder: [] }

    async componentDidMount() {
        await this.props.onGetUserProfile()
        await this.getOrderHandler()

        const orders = this.props.userOrder.filter(order => {
            return order.paymentStatus === 'canceled'
        })

        this.setState({ selectedOrder: orders })
    }

    getOrderHandler = async () => {
        await this.props.onGetUserOrder()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            const search = this.props.location.search
            const query = new URLSearchParams(search)

            for (let param of query.entries()) {
                const orderStatus = param[1]
                console.log(orderStatus)
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

        this.state.selectedOrder.forEach(order => order.items)

        let userOrder = this.state.selectedOrder.map((order, i) => {
            return (
                <div key={i}>
                    <div>
                        {order.items.map((item, i) => {
                            return <UserOrderItem key={i} item={item} />
                        })}
                    </div>
                    <span>{order.totalQuantity}</span>
                    <span>{order.totalAmount}</span>
                </div>
            )
        })

        return (
            <section className="userProfileWrap">
                <h4>ACCOUNT DASHBOARD</h4>
                <div className="orderContainer">
                    {userProfileCard}
                    <div className="orderDetail">
                        <UserOrderBar />
                        {userOrder}
                    </div>
                </div>
            </section>
        )
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
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderManagement))
