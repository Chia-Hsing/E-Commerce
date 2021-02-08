import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserProfileCard from '../components/User/UserProfileCard'
import { arrayBufferToBase64Img } from '../utils/utilities'
import * as actions from '../store/actions/index'
import '../scss/userProfile.scss'

class OrderManagement extends Component {
    async componentDidMount() {
        await this.props.onGetUserProfile()
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
            <>
                <h4>ACCOUNT DASHBOARD</h4>
                <div className="userContainer">{userProfileCard}</div>
            </>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderManagement)
