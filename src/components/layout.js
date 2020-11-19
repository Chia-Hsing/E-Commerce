import React, { useState } from 'react'
import NavBar from './Navigation/NavBar'
import SideDrawer from './Navigation/SideDrawer'
import Backdrop from '../components/UI/Backdrop'

const Layout = props => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const drawerOpenHandler = () => {
        setDrawerOpen(prevState => {
            return !prevState
        })
    }

    const drawerCloseHandler = () => {
        setDrawerOpen(false)
    }

    return (
        <>
            <SideDrawer show={drawerOpen} close={() => drawerCloseHandler()} />
            <Backdrop close={() => drawerCloseHandler()} show={drawerOpen} />
            <NavBar open={() => drawerOpenHandler()} />
            <main>{props.children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
