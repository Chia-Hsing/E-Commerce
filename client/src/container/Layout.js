import React, { useState } from 'react'

import NavBar from '../components/Layout/Navigation/NavBar'
import SideDrawer from '../components/Layout/Navigation/SideDrawer'
import Footer from '../components/Layout/Footer/Footer'
import Backdrop from '../components/UI/Backdrop'

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
