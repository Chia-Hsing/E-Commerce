import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import UserProfileCard from '../components/User/UserProfileCard'
import Input from '../components/UI/Input'
import * as actions from '../store/actions/index'
import { updateObj, checkValidity } from '../utils/utilities'
import '../scss/userProfile.scss'

class User extends Component {
    state = {
        controls: {
            name: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: '',
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
                    placeholder: '',
                },
                val: '',
                validation: {
                    isRequired: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            phone: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: ' ',
                },
                val: '',
                validation: {
                    isRequired: true,
                    isPhone: true,
                },
                valid: false,
                touched: false,
            },
            address: {
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
            city: {
                eleType: 'select',
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
            postalCode: {
                eleType: 'input',
                eleConfig: {
                    type: 'text',
                    placeholder: ' ',
                },
                val: '',
                validation: {
                    isRequired: true,
                    isPostalCode: true,
                },
                valid: false,
                touched: false,
            },
        },
    }

    async componentDidMount() {
        await this.props.onGetUserProfile()

        const update = updateObj(this.state.controls, {
            name: { ...this.state.controls.name, val: this.props.userProfile.name || '' },
            email: { ...this.state.controls.email, val: this.props.userProfile.email || '' },
            phone: { ...this.state.controls.phone, val: this.props.userProfile.phone || '' },
            address: { ...this.state.controls.address, val: this.props.userProfile.address || '' },
            city: { ...this.state.controls.city, val: this.props.userProfile.city || '' },
            postalCode: { ...this.state.controls.postalCode, val: this.props.userProfile.postalCode || '' },
        })

        console.log(update)

        this.setState({ controls: update })

        console.log(this.state)
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

    submitHandler = e => {
        const name = this.state.controls.name.val
        const email = this.state.controls.email.val
        const phone = this.state.controls.phone.val
        const address = this.state.controls.address.val
        const city = this.state.controls.city.val
        const postalCode = this.state.controls.postalCode.val

        this.props.onUpdateUserProfile(name, email, phone, address, city, postalCode)
    }

    render() {
        let formElement = []

        for (let key in this.state.controls) {
            formElement.push({
                key,
                config: this.state.controls[key],
            })
        }

        let form = this.props.auth ? (
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
        ) : (
            <Redirect to="/" />
        )

        return (
            <section className="userContainer">
                <UserProfileCard />
                <form onSubmit={this.submitHandler} className="userProfileDetail">
                    {form}
                    <button>Update</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.user.userProfile,
        auth: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onUpdateUserProfile: (name, email, phone, address, city, postalCode) =>
            dispatch(actions.updateUserProfile(name, email, phone, address, city, postalCode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
