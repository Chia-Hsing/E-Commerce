import React from 'react'
import LayOut from './components/Layout'
import NavBar from './components/Navigation/NavBar'
import './App.css'

function App() {
    return (
        <div className="App">
            <LayOut>
                <NavBar />
            </LayOut>
        </div>
    )
}

export default App
