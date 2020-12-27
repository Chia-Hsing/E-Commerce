import React, { useEffect } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import Layout from './container/Layout'
import Home from './container/Home'
import Products from './container/Products'
import Product from './container/Product'
import ShoppingBag from './container/ShoppingBag'
import Signup from './container/Signup'
import Login from './container/Login'
import * as actions from './store/actions/index'

import './scss/CSSTransition.scss'

const routes = [
    { path: '/auth/signup', name: 'signup', Component: Signup },
    { path: '/auth/login', name: 'login', Component: Login },
    { path: '/products', name: 'products', Component: Products },
    { path: '/products/product/:PID', name: 'product', Component: Product },
    { path: '/shopping-bag', name: 'shopping-bag', Component: ShoppingBag },
    { path: '/', name: 'Home', Component: Home },
]

const App = props => {
    useEffect(() => {
        // check if there is a bag stored at the local storage, if yes, set it to the state.
        props.onSetBagItems()
    }, [props])

    let routers = routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
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

// const mapStateToProps = state => {
//     return
// }
const mapDispatchToProps = dispatch => {
    return {
        onSetBagItems: () => dispatch(actions.setBagItems()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
