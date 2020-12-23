import React from 'react'
import { Link } from 'react-router-dom'

const Login = props => {
    return (
        <div className={props.class}>
            <Link to="/auth/signup" exact>
                ACCOUNT / LOGIN
            </Link>
        </div>
    )
}

export default Login
