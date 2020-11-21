import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import '../../styles/navigation.scss'
import MenuToggle from './MenuToggle'

const NavBar = props => {
    return (
        <section className="navBar">
            <MenuToggle clicked={props.open} />
            <Logo class="logo" />
            <Login class="login" />
            <NavItems class="navItems" />
        </section>
    )
}

export default NavBar
