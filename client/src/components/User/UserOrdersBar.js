import React from 'react'
import { NavLink } from 'react-router-dom'

const UserOrdersBar = props => {
    return (
        <nav>
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

export default UserOrdersBar
