import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../scss/BreadCrumb.scss'

const BreadCrumb = props => {
    return (
        <div className="breadCrumbWrap">
            <ul className="breadCrumb">
                <li>
                    <NavLink to="/">Home </NavLink>
                </li>

                {props.gender ? (
                    <li>
                        {' / '}
                        <NavLink to={`products?gender=${props.gender}`}>{props.gender}</NavLink>
                    </li>
                ) : null}
                {props.category ? (
                    <li>
                        {' / '}
                        <NavLink to={`products?category=${props.category}`}>{props.category}</NavLink>
                    </li>
                ) : null}
            </ul>
        </div>
    )
}

export default BreadCrumb
