import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navigation.scss'

const dropDownItem = props => {
    return (
        <li className="dropDownItem">
            <Link to={props.link}>{props.children}</Link>
        </li>
    )
}

export default dropDownItem
