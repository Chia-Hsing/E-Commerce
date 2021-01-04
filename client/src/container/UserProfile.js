import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserProfileCard from '../components/User/UserProfileCard'
import UserProfileForm from '../components/User/UserProfileForm'
import * as actions from '../store/actions/index'
import { updateObj, checkValidity } from '../utils/utilities'
import '../scss/userProfile.scss'

class UserProfile extends Component {
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
                    placeholder: '- City -',
                    options: ['Taipei', 'New Taipei'],
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
        avatar: '',
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

        this.setState({ controls: update })
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

    submitHandler = () => {
        const name = this.state.controls.name.val
        const email = this.state.controls.email.val
        const phone = this.state.controls.phone.val
        const address = this.state.controls.address.val
        const city = this.state.controls.city.val
        const postalCode = this.state.controls.postalCode.val

        this.props.onUpdateUserProfile(name, email, phone, address, city, postalCode)
    }

    uploadImgHandler = e => {
        const files = e.target.files
        if (!files.length) return
        const url = URL.createObjectURL(files[0])
        this.setState({ avatar: url })
    }

    unloadImgHandler = () => {
        this.setState({ avatar: '' })
    }

    render() {
        let formElement = []

        for (let key in this.state.controls) {
            formElement.push({
                key,
                config: this.state.controls[key],
            })
        }

        return (
            <section className="userContainer">
                <UserProfileCard />
                <UserProfileForm
                    onSubmit={this.submitHandler}
                    fileChange={this.uploadImgHandler}
                    fileClick={this.unloadImgHandler}
                    formElement={formElement}
                    avatar={this.state.avatar}
                />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.user.userProfile,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onUpdateUserProfile: (name, email, phone, address, city, postalCode) =>
            dispatch(actions.updateUserProfile(name, email, phone, address, city, postalCode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
