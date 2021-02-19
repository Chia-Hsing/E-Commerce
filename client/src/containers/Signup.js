import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Input from '../components/UI/Input'
import Spinner from '../components/UI/Spinner'
import { updateObj, checkValidity } from '../utils/utilities'
import * as actions from '../store/actions/index'
import '../scss/auth.scss'
class Signup extends Component {
    state = {
        controls: {
            name: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: ' ',
                },
                val: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
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
            confirmPassword: {
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
        const name = this.state.controls.name.val
        const email = this.state.controls.email.val
        const password = this.state.controls.password.val
        const confirmPassword = this.state.controls.confirmPassword.val

        this.props.onSignupAuth(name, email, password, confirmPassword)
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
            <form onSubmit={this.submitHandler}>
                <h4>SIGN UP</h4>
                {typeof this.props.error === 'string' && <h5 className="errorMSG">{this.props.error}</h5>}
                {formElement.map(ele => {
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
                })}
                <div className="linkAndButton">
                    <button>Submit</button>
                    <div className="link">
                        <Link className="link" to="/auth/login">
                            login
                        </Link>
                    </div>
                </div>
            </form>
        )

        return (
            <div className="auth">
                {this.props.isAuthenticated && <Redirect to={this.props.authRedirectPath} />}
                {form}
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
        onSignupAuth: (name, email, password, confirmPassword) =>
            dispatch(actions.signup(name, email, password, confirmPassword)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
