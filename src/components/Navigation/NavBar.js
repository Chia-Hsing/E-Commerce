import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import '../../styles/navigation.scss'

const navBar = props => {
    return (
        <header className="navBar">
            <Logo />
            <NavItems />
            <Login />
        </header>
    )
}

export default navBar
