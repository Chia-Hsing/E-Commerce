import React, { Component } from 'react'

import Input from '../components/UI/Input'
import { updateObj, checkValidity } from '../utils/utilities'
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
        },
    }

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
                    key={ele.key}
                    label={ele.key}
                    value={ele.config.val}
                    type={ele.config.eleType}
                    config={ele.config.eleConfig}
                    validation={ele.config.validation}
                    isValid={ele.config.valid}
                    shouldValidate={ele.config.validation}
                    inputChange={e => this.inputChangeHandler(e, ele.key)}
                />
            )
        })

        return (
            <div className="signup">
                <form>
                    {form}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup
