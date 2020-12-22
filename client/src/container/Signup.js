import React, { Component } from 'react'

class Signup extends Component {
    state = {
        controls: {
            name: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: 'name',
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
                    placeholder: 'e-mail address',
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
                    placeholder: 'password',
                },
                val: '',
                validation: {
                    isRequired: true,
                    minlength: 8,
                },
                valid: false,
                touched: false,
            },
        },
    }

    render() {
        return
    }
}

export default Signup
