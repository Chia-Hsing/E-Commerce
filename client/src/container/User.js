import React, { Component } from 'react'

import Profile from '../components/User/Profile'
import '../scss/user.scss'

class User extends Component {
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

export default User
