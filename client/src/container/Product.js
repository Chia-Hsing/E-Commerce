import { React, Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/index'

class Product extends Component {
    componentDidMount() {
        const PID = this.props.match.params.PID
        this.props.onGetProduct(PID)
    }

    render() {
        return <div>123</div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetProduct: PID => dispatch(actions.getProduct(PID)),
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
