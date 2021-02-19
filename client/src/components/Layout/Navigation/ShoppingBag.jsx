import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

const Login = props => {
    return (
        <div className={props.class}>
            <Link to="/shopping-bag">SHOPPING BAG ( {props.totalQuantity} )</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return { totalQuantity: state.bag.totalQuantity }
}

export default connect(mapStateToProps, null)(Login)
