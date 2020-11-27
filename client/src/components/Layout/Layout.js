import React, { useState } from 'react'

import NavBar from './Navigation/NavBar'
import SideDrawer from './Navigation/SideDrawer'
import Footer from './Footer/Footer'
import Backdrop from '../UI/Backdrop'

const Layout = props => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const drawerToggleHandler = () => {
        setDrawerOpen(prevState => {
            return !prevState
        })
    }

    const drawerCloseHandler = () => {
        setDrawerOpen(false)
    }

    return (
        <>
            <SideDrawer close={() => drawerCloseHandler()} show={drawerOpen} />
            <Backdrop close={() => drawerCloseHandler()} show={drawerOpen} />
            <NavBar open={() => drawerToggleHandler()} />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
