import React from 'react'
import { CSSTransition } from 'react-transition-group'

import Home from './container/Home'

import './scss/CSSTransition.scss'

function App() {
    return (
        <CSSTransition in={true} appear={true} timeout={2000} classNames="home">
            <div className="App">
                <Home />
            </div>
        </CSSTransition>
    )
}

export default App
