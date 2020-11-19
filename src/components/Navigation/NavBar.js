import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import '../../styles/navigation.scss'
import { HeroiconsSolidMenuAlt2 } from './menuToggle'

const navBar = props => {
    return (
        <header className="navBar">
            <HeroiconsSolidMenuAlt2 clicked={props.open} />
            <Logo class="logo" />
            <NavItems class="navItems" />
            <Login class="login" />
        </header>
    )
}

export default navBar
