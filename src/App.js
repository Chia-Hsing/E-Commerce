import React from 'react'
import LayOut from './components/layout'
import NavBar from './components/navigation/navBar'
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
