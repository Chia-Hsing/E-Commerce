import React from 'react'
import { Link } from 'react-router-dom'
import '../../../scss/navigation.scss'

const NavItem = props => {
    return (
        <div className="navItem">
            <Link
                to={{
                    pathname: `/products`,
                    search: `gender=${props.children}`,
                }}
            >
                {props.children}
            </Link>
        </div>
    )
}

export default NavItem
