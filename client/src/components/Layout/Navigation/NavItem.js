import React from 'react'
import { Link } from 'react-router-dom'
import '../../../scss/navigation.scss'

const NavItem = props => {
    return (
        <div className="navItem">
            <Link to="">{props.children}</Link>
        </div>
    )
}

export default NavItem
