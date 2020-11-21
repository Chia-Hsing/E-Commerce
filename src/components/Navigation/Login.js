import React from 'react'
import NavItem from './NavItem'
import '../../styles/navigation.scss'

const Login = props => {
    return (
        <div className={props.class}>
            <NavItem link="" exact>
                ACCOUNT / LOGIN
            </NavItem>
        </div>
    )
}

export default Login
