import React from 'react'
import PropTypes from 'prop-types'

import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import ShoppingBag from './ShoppingBag'
import MenuToggle from './MenuToggle'
import '../../../scss/navigation.scss'

const NavBar = props => {
    return (
        <header className="navBar">
            <MenuToggle clicked={props.open} />
            <Logo class="logo" />
            <Login class="login" />
            <ShoppingBag class="shoppingBag" />
            <NavItems class="navItems" />
        </header>
    )
}

export default NavBar

NavBar.propTypes = {
    open: PropTypes.func,
}
