import React, { useState } from 'react'

import NavBar from './Layout/Navigation/NavBar'
import Footer from '../components/Layout/Footer/Footer'
import SideDrawer from './Layout/Navigation/SideDrawer'
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
