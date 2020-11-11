import React from 'react'
import NavItem from './navItem'

const navItems = props => {
    return (
        <ul>
            <NavItem link="" exact>
                Categories
            </NavItem>
            <NavItem link="" exact>
                Login
            </NavItem>
        </ul>
    )
}

export default navItems
