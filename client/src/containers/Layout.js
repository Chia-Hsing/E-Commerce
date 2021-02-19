import React, { useState } from 'react'
import { connect } from 'react-redux'

import NavBar from '../components/Layout/Navigation/NavBar'
import SideDrawer from '../components/Layout/Navigation/SideDrawer'
import Footer from '../components/Layout/Footer/Footer'
import Backdrop from '../components/UI/Backdrop'
import * as actions from '../store/actions/index'

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

    const onLogoutHandler = async () => {
        await props.onLogout()
        await props.onClearUser()
        await props.onClearOrder()
    }

    return (
        <>
            <SideDrawer
                isAuthenticated={props.isAuthenticated}
                logout={onLogoutHandler}
                close={() => drawerCloseHandler()}
                show={drawerOpen}
            />
            <Backdrop close={() => drawerCloseHandler()} show={drawerOpen} />
            <NavBar
                isAuthenticated={props.isAuthenticated}
                logout={onLogoutHandler}
                open={() => drawerToggleHandler()}
            />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        onClearUser: () => dispatch(actions.clearUser()),
        onClearOrder: () => dispatch(actions.clearOrder()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
