import React from 'react'
import Logo from './Logo'
import NavItems from './NavItems'
import Login from './Login'
import '../../styles/navigation.scss'

const sideDrawer = props => {
    const classes = ['sideDrawer']

    if (props.show) {
        classes.push('active')
    }

    return (
        <div className={classes.join(' ')}>
            <div className="menuClose" onClick={props.close}>
                <svg focusable="false" width="1em" height="1em" viewBox="0 0 512 512">
                    <path
                        d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>

            <Logo class="logo-Side-Drawer" />
            <NavItems class="navItems-Side-Drawer" />
            <Login class="login-Side-Drawer" />
        </div>
    )
}

export default sideDrawer
