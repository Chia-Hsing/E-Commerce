import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import '../../styles/navigation.scss'

const navBar = props => {
    return (
        <header className="navBar">
            <Logo class="logo" />
            <NavItems class="navItems" />
            <Login class="login" />
        </header>
    )
}

export default navBar
