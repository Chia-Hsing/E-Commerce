import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import UserProfileCard from '../components/User/UserProfileCard'
import UserOrdersBar from '../components/User/UserOrdersBar'
import { arrayBufferToBase64Img } from '../utils/utilities'
import * as actions from '../store/actions/index'
import '../scss/userProfile.scss'

class OrderManagement extends Component {
    async componentDidMount() {
        await this.props.onGetUserProfile()
        await this.getOrdersHandler()
    }

    getOrdersHandler = async () => {
        const search = this.props.location.search
        const query = new URLSearchParams(search)

        for (let param of query.entries()) {
            const orderStatus = param[1]
            await this.props.onGetUserCanceledOrder(orderStatus)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            this.getOrdersHandler()
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

        return (
            <section className="userProfileWrap">
                <h4>ACCOUNT DASHBOARD</h4>
                <div className="userContainer">{userProfileCard}</div>
                <div>
                    <UserOrdersBar />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        userProfile: state.user.userProfile,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onGetUserCanceledOrder: status => dispatch(actions.getUserCanceledOrder(status)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderManagement))
