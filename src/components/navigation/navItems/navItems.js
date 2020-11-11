import React from 'react'
import NavItem from '../navItem/navItem'
import classes from './navItems.module.css'

const navItems = props => {
    return (
        <ul className={classes.navItems}>
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
