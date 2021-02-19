import React from 'react'
import PropTypes from 'prop-types'

import NavItems from './NavItems'
import Logo from './Logo'
import Login from './Login'
import Logout from './Logout'
import User from './User'
import ShoppingBag from './ShoppingBag'
import MenuToggle from './MenuToggle'
import '../../../scss/navigation.scss'

const NavBar = props => {
    return (
        <header className="navBar">
            <MenuToggle clicked={props.open} />
            <Logo class="logo" />
            <div className="link-group">
                <ShoppingBag class="shoppingBag" />

                {props.isAuthenticated ? (
                    <>
                        <User class="user" />
                        <Logout logout={props.logout} class="logout" />
                    </>
                ) : (
                    <Login class="login" />
                )}
            </div>
            <NavItems class="navItems" />
        </header>
    )
}

export default NavBar

NavBar.propTypes = {
    open: PropTypes.func,
}
