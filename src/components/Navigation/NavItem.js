import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navigation.scss'

const navItem = props => {
    return (
        <div className="navItem" onClick={props.clicked}>
            <Link>{props.children}</Link>
        </div>
    )
}

export default navItem
