import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
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
            {props.isAuthenticated ? <Logout onLogout={props.onLogout} /> : <Login class="login-Side-Drawer" />}
        </nav>
    )
}

export default SideDrawer

SideDrawer.prototypes = {
    show: PropTypes.func,
    close: PropTypes.func,
}
