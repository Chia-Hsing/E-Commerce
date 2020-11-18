import React from 'react'
import NavBar from './Navigation/NavBar'
import SideDrawer from './Navigation/SideDrawer'

const layout = props => {
    return (
        <>
            <SideDrawer />
            <NavBar />
            <main>{props.children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default layout
