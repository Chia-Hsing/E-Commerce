import React from 'react'
import Backdrop from '../UI/Backdrop'
import Logo from './Logo'
import NavItems from './NavItems'
import Login from './Login'
import '../../styles/navigation.scss'

const sideDrawer = props => {
    return (
        <div className="sideDrawer">
            <Logo class="logo-Side-Drawer" />
            <NavItems class="navItems-Side-Drawer" />
            <Login class="login-Side-Drawer" />
            <Backdrop />
        </div>
    )
}

export default sideDrawer
