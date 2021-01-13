import React from 'react'
import { Link } from 'react-router-dom'

const userProfileCard = props => {
    return (
        <div className="userProfileCard">
            <figure>
                <img src={props.avatar} alt="" />
            </figure>
            <div className="userName">
                <h3>{props.name}</h3>
            </div>
            <div className="link">
                <Link>PROFILE</Link>
                <Link>ORDER</Link>
            </div>
        </div>
    )
}

export default userProfileCard
