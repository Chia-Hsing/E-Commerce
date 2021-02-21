import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import User from './User'
import NavItems from './NavItems'
import Login from './Login'
import Logout from './Logout'
import { icons } from '../../../utils/icons'
import '../../../scss/navigation.scss'

const SideDrawer = props => {
    const classes = ['sideDrawer']

    if (props.show) {
        classes.push('active')
    }

    return (
        <nav className={classes.join(' ')}>
            <div className="menuClose" onClick={props.close}>
                {icons.close()}
            </div>

            <Logo class="logo-Side-Drawer" />
            <NavItems class="navItems-Side-Drawer" />
            <div className="user-Side-Drawer-container">
                {props.isAuthenticated ? (
                    <>
                        <User class="user-Side-Drawer" />
                        <Logout class="logout-Side-Drawer" logout={props.logout} />
                    </>
                ) : (
                    <Login class="login-Side-Drawer" />
                )}
            </div>
        </nav>
    )
}

export default SideDrawer

SideDrawer.prototypes = {
    show: PropTypes.func,
    close: PropTypes.func,
}
