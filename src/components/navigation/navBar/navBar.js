import React from 'react'
import NavItems from '../navItems/navItems'
import Logo from '../../logo'
import classes from './navBar.module.css'

const navBar = props => {
    return (
        <header className={classes.navBar}>
            <div>
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default navBar
