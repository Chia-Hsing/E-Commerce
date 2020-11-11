import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './navItem.module.css'

const navItem = props => {
    return (
        <li className={classes.navItem}>
            <NavLink to={props.link} activeClassName={classes.active} exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default navItem
