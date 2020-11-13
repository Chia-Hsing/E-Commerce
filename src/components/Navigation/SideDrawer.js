import React from 'react'
import Backdrop from './SideDrawer'
import Logo from './Logo'
import NavItems from './NavItems'
import '../../styles/navigation.scss'

const sideDrawer = props => {
    return (
        <>
            <Backdrop />
            <div className="sideDrawer">
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </>
    )
}

export default sideDrawer
