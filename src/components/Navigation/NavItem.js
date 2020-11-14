import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navigation.scss'

const navItem = props => {
    return (
        <div className="navItem">
            <Link to="">{props.children}</Link>
        </div>
    )
}

export default navItem
