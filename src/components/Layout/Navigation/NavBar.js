import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import '../../../scss/navigation.scss'
import MenuToggle from './MenuToggle'

const NavBar = props => {
    return (
        <header className="navBar">
            <MenuToggle clicked={props.open} />
            <Logo class="logo" />
            <Login class="login" />
            <NavItems class="navItems" />
        </header>
    )
}

export default NavBar
