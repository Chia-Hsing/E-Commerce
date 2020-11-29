import React from 'react'
import { CSSTransition } from 'react-transition-group'

import Layout from './container/Layout'
import Home from './container/Home'

import './scss/CSSTransition.scss'

function App() {
    return (
        <CSSTransition in={true} appear={true} timeout={2000} classNames="home">
            <Layout>
                <Home />
            </Layout>
        </CSSTransition>
    )
}

export default App
