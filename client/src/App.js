import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Layout from './container/Layout'
import Home from './container/Home'
import Products from './container/Products'
import Product from './container/Product'
import ShoppingBag from './container/ShoppingBag'
import Signup from './container/Signup'

import './scss/CSSTransition.scss'

const routes = [
    { path: '/products', name: 'Products', Component: Products },
    { path: '/products/product/:PID', name: 'product', Component: Product },
    { path: '/shopping-bag', name: 'shopping-bag', Component: ShoppingBag },
    { path: '/auth/signup', name: 'signup', Component: Signup },
    { path: '/', name: 'Home', Component: Home },
]

function App() {
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

export default withRouter(App)
