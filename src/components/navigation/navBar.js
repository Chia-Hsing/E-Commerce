import React from 'react'
import NavItems from './navItems'
import Logo from '../logo'

const navBar = props => {
    return (
        <header>
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
