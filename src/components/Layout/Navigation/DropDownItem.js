import React from 'react'
import { Link } from 'react-router-dom'
import '../../../scss/navigation.scss'

const DropDownItem = props => {
    return (
        <li className="dropDownItem">
            <Link to={props.link}>{props.children}</Link>
        </li>
    )
}

export default DropDownItem
