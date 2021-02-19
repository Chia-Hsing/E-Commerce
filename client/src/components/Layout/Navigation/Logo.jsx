import React from 'react'
import { Link } from 'react-router-dom'
import '../../../scss/navigation.scss'

const Logo = props => {
    return (
        <div className={props.class}>
            <Link to="/">TRIPLE TIME</Link>
        </div>
    )
}

export default Logo
