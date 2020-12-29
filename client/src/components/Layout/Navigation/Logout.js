import React from 'react'
import { Link } from 'react-router-dom'

const Logout = props => {
    return (
        <div className={props.class}>
            <Link to="" onClick={props.onLogout}>
                LOGOUT
            </Link>
        </div>
    )
}

export default Logout
