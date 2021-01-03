import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import Input from '../components/UI/Input'
import Spinner from '../components/UI/Spinner'
import { updateObj, checkValidity } from '../utils/utilities'
import * as actions from '../store/actions/index'
import '../scss/auth.scss'
class Login extends Component {
    state = {
        controls: {
            email: {
                eleType: 'input',
                eleConfig: {
                    type: 'email',
                    placeholder: ' ',
                },
                val: '',
                validation: {
                    isRequired: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                eleType: 'input',
                eleConfig: {
                    type: 'password',
                    placeholder: ' ',
                },
                val: '',
                validation: {
                    isRequired: true,
                    isPassword: true,
                    maxlength: 20,
                    minlength: 8,
                },
                valid: false,
                touched: false,
            },
        },
    }

    componentDidMount() {
        if (!this.props.isPurchasing && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath('/')
        } else if (this.props.isPurchasing) {
            this.props.onSetAuthRedirectPath('/shopping-bag')
        }
    }

    // initialize the error message
    componentWillUnmount() {
        this.props.onInitErrorAuth()
    }

    // handle the input changes.
    inputChangeHandler = (e, controlName) => {
        const updatedControls = updateObj(this.state.controls, {
            [controlName]: updateObj(this.state.controls[controlName], {
                val: e.target.value,
                valid: checkValidity(e.target.value, this.state.controls[controlName].validation),
                touched: true,
            }),
        })

        this.setState({ controls: updatedControls })
    }

    // handle the form submit.
    submitHandler = e => {
        e.preventDefault()
        const email = this.state.controls.email.val
        const password = this.state.controls.password.val

        this.props.onLoginAuth(email, password)
    }

    render() {
        let formElement = []

        for (let key in this.state.controls) {
            formElement.push({
                key,
                config: this.state.controls[key],
            })
        }

        let form = this.props.loading ? (
            <Spinner />
        ) : (
            formElement.map(ele => {
                return (
                    <Input
                        error={this.props.error}
                        key={ele.key}
                        label={ele.key}
                        value={ele.config.val}
                        type={ele.config.eleType}
                        config={ele.config.eleConfig}
                        isValid={ele.config.valid}
                        touched={ele.config.touched}
                        shouldValidate={ele.config.validation}
                        inputChange={e => this.inputChangeHandler(e, ele.key)}
                    />
                )
            })
        )

        let title = !this.props.loading && <h4>LOG IN</h4>
        let button = this.props.loading ? null : (
            <div className="linkAndButton">
                <button>Submit</button>
                <div className="link">
                    <Link className="link" to="/auth/signup">
                        signup
                    </Link>
                </div>
            </div>
        )

        return (
            <div className="auth">
                {this.props.isAuthenticated && <Redirect to={this.props.authRedirectPath} />}
                <form onSubmit={this.submitHandler}>
                    {title}
                    {typeof this.props.error === 'string' && <h5 className="errorMSG">{this.props.error}</h5>}
                    {form}
                    {button}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        authRedirectPath: state.auth.authRedirectPath,
        isAuthenticated: state.auth.token !== null,
        isPurchasing: state.bag.purchasing,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitErrorAuth: () => dispatch(actions.initErrorAuth()),
        onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
        onLoginAuth: (email, password) => dispatch(actions.login(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
