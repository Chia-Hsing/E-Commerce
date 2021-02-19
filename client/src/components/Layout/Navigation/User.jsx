import React from 'react'
import { Link } from 'react-router-dom'

const User = props => {
    return (
        <div className={props.class}>
            <Link to="/user/profile">ACCOUNT</Link>
        </div>
    )
}

export default User
