import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Input from '../components/UI/Input'
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

    componentWillUnmount() {
        this.props.inInitErrorAuth()
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

        const form = formElement.map(ele => {
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

        return (
            <div className="signup">
                <form onSubmit={this.submitHandler}>
                    {typeof this.props.error === 'string' && (
                        <h5 style={{ color: 'red' }} className="errorMSG">
                            <Link to="/auth/login">{this.props.error}</Link>
                        </h5>
                    )}
                    {form}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inInitErrorAuth: () => dispatch(actions.initErrorAuth()),
        onSignupAuth: (name, email, password, confirmPassword) =>
            dispatch(actions.signup(name, email, password, confirmPassword)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
