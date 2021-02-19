import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const UserOrderNav = props => {
    return (
        <div className="orderNav">
            <div className="orderNavItem">
                <NavLink
                    to={{
                        pathname: `/user/orders`,
                        search: `status=canceled`,
                    }}
                    isActive={(match, location) => {
                        if (!match) {
                            return false
                        }
                        const searchParams = new URLSearchParams(location.search)
                        for (let param of searchParams.entries()) {
                            return match.isExact && param[1] === 'canceled'
                        }
                    }}
                >
                    canceled
                </NavLink>
            </div>
            <div className="orderNavItem">
                <NavLink
                    to={{
                        pathname: `/user/orders/`,
                        search: `status=paid`,
                    }}
                    isActive={(match, location) => {
                        if (!match) {
                            return false
                        }
                        const searchParams = new URLSearchParams(location.search)
                        for (let param of searchParams.entries()) {
                            return match.isExact && param[1] === 'paid'
                        }
                    }}
                >
                    paid
                </NavLink>
            </div>
        </div>
    )
}

export default withRouter(UserOrderNav)
