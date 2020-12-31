import React, { Component } from 'react'
import { connect } from 'react-redux'

import Profile from '../components/User/Profile'
import * as actions from '../store/actions/index'
import '../scss/user.scss'

class User extends Component {
    componentDidMount() {
        this.props.onGetUserProfile()
    }

    render() {
        return (
            <section className="userContainer">
                <div className="userCard">
                    <figure>
                        <img src=" " alt="" />
                    </figure>
                    <div>
                        <h3>NAME</h3>
                    </div>
                    <div>
                        <span>PROFILE</span>
                        <span>ORDER</span>
                    </div>
                </div>
                <Profile />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
