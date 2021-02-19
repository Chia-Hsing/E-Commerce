import React, { useEffect } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import Layout from './containers/Layout'
import Home from './containers/Home'
import Products from './containers/Products'
import Product from './containers/Product'
import ShoppingBag from './containers/ShoppingBag'
import Signup from './containers/Signup'
import Login from './containers/Login'
import UserProfile from './containers/UserProfile'
import UserOrders from './containers/UserOrders'
import Checkout from './containers/Checkout'
import * as actions from './store/actions/index'

import './scss/CSSTransition.scss'

const routes = [
    { path: '/auth/signup', exact: true, name: 'signup', Component: Signup },
    { path: '/auth/login', exact: true, name: 'login', Component: Login },
    { path: '/user/profile', exact: false, name: 'user', Component: UserProfile },
    { path: '/user/orders', exact: false, name: 'user', Component: UserOrders },
    { path: '/products', exact: true, name: 'products', Component: Products },
    { path: '/products/product/:PID', exact: true, name: 'product', Component: Product },
    { path: '/shopping-bag', exact: true, name: 'shopping-bag', Component: ShoppingBag },
    { path: '/checkout', exact: true, name: 'checkout', Component: Checkout },
    { path: '/', name: 'Home', Component: Home },
]

const App = props => {
    useEffect(() => {
        // check if there is a bag stored at the local storage, if yes, set it to the state.
        props.onAuthCheckState()
        props.onSetBagItems()
    })

    let routers = routes.map(({ path, exact, Component }) => (
        <Route key={path} exact={exact} path={path}>
            {({ match }) => (
                <CSSTransition in={match != null} appear={true} timeout={2000} classNames="home" unmountOnExit>
                    <div className="page">
                        <Component />
                    </div>
                </CSSTransition>
            )}
        </Route>
    ))

    return (
        <Layout>
            <Switch>
                {routers}
                <Redirect to="/" />
            </Switch>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSetBagItems: () => dispatch(actions.setBagItems()),
        onAuthCheckState: () => dispatch(actions.authCheckState()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
