import React from 'react'
import NavBar from './Navigation/NavBar'
import SideDrawer from './Navigation/SideDrawer'

const layout = props => {
    return (
        <>
            <NavBar />
            <SideDrawer />
            {/* <main>{props.children}</main> */}
        </>
    )
}

export default layout
