import React from 'react'
import { NavLink } from 'react-router-dom'

const UserProfileCard = props => {
    return (
        <div className="userProfileCard">
            <figure>
                <img src={props.avatar} alt="" />
            </figure>
            <div className="userName">
                <h3>{props.name}</h3>
            </div>
            <div className="link">
                <NavLink to="/user/profile">PROFILE</NavLink>
                <NavLink to="/user/order">ORDER</NavLink>
            </div>
        </div>
    )
}

export default UserProfileCard
