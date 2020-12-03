import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Layout from './container/Layout'
import Home from './container/Home'
import Products from './container/Products'

import './scss/CSSTransition.scss'

function App() {
    let routers = (
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Redirect to="/" />
        </Switch>
    )

    return (
        <Layout>
            <CSSTransition in={true} appear={true} timeout={2000} classNames="home">
                {routers}
            </CSSTransition>
        </Layout>
    )
}

export default withRouter(App)
