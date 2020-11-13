import React from 'react'
import NavItem from './NavItem'
import '../../styles/navigation.scss'

const login = props => {
    return (
        <div className="login">
            <NavItem link="" exact>
                ACCOUNT / LOGIN
            </NavItem>
        </div>
    )
}

export default login
