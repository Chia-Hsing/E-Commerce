import React from 'react'
import { NavLink } from 'react-router-dom'

const UserOrderBar = props => {
    return (
        <nav className="orderNav">
            <NavLink
                active="true"
                to={{
                    pathname: `/user/order`,
                    search: `status=canceled`,
                }}
            >
                canceled
            </NavLink>
            <NavLink
                to={{
                    pathname: `/user/order`,
                    search: `status=paid`,
                }}
            >
                paid
            </NavLink>
        </nav>
    )
}

export default UserOrderBar
