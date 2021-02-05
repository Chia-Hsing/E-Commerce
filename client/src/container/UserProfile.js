import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import UserProfileCard from '../components/User/UserProfileCard'
import FileUploader from '../components/UI/FileUploader'
import Delivery from './Delivery'
import Input from '../components/UI/Input'
import * as actions from '../store/actions/index'
import { updateObj, checkValidity, arrayBufferToBase64Img, alert } from '../utils/utilities'
import '../scss/userProfile.scss'

class UserProfile extends Component {
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
        },
        avatarPreview: '',
    }

    async componentDidMount() {
        await this.props.onGetUserProfile()
        await this.props.onGetDeliveryInfo()

        const updatedControls = updateObj(this.state.controls, {
            name: { ...this.state.controls.name, val: this.props.userProfile.name || '' },
            email: { ...this.state.controls.email, val: this.props.userProfile.email || '' },
        })

        this.setState({ controls: updatedControls })
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
        e.preventDefault()
        const target = e.target

        var formData = new FormData(target)

        const stateKeys = ['name', 'email']

        stateKeys.forEach(stateKey => {
            formData.set([stateKey], this.state.controls[stateKey].val)
        })

        const config = {
            headers: { 'content-type': 'multipart/form-data' },
        }

        this.props.onUpdateUserProfile(formData, config)
    }

    uploadImgHandler = files => {
        if (files.length <= 0) return
        const url = URL.createObjectURL(files[0])
        this.setState({ avatarPreview: url })
    }

    showDeliveryInfoHandler = () => {
        this.props.history.replace('/user/profile/delivery')
    }

    onErrorAlertHandler = msg => {
        alert
            .fire({
                title: 'Oops...',
                text: msg,
                icon: 'warning',
                iconHtml: '!',
                iconColor: '#2a2c30',
                confirmButtonText: 'redirect to homepage',
            })
            .then(result => {
                if (result.isConfirmed) {
                    this.props.history.push('/')
                }
            })
    }

    render() {
        if (typeof this.props.error === 'string') {
            this.onErrorAlertHandler(this.props.error)
            this.props.history.push('/')
        }

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

        let avatarImg = null
        let avatarPreview = null

        if (this.props.userProfile.avatar) {
            const imgBuffer = this.props.userProfile.avatar.data
            avatarImg = arrayBufferToBase64Img(imgBuffer)

            if (this.state.avatarPreview) {
                avatarPreview = this.state.avatarPreview
            } else {
                avatarPreview = avatarImg
            }
        } else {
            avatarImg = 'https://i.pinimg.com/564x/a6/f3/c5/a6f3c55ace829310723adcb7a468869b.jpg'

            if (this.state.avatarPreview) {
                avatarPreview = this.state.avatarPreview
            } else {
                avatarPreview = avatarImg
            }
        }

        const userProfileCard = <UserProfileCard avatar={avatarImg} name={this.props.userProfile.name} />

        const avatarUpload = <FileUploader img={avatarPreview} fileChange={files => this.uploadImgHandler(files)} />

        return (
            <section className="userProfileWrap">
                <h5>ACCOUNT DASHBOARD</h5>
                <div className="userContainer">
                    {userProfileCard}
                    <form onSubmit={this.submitHandler} className="userProfileDetail">
                        <h6>user info</h6>
                        {form}
                        {avatarUpload}
                        <button>update</button>
                    </form>
                </div>
                {this.props.location.pathname === '/user/profile' ? (
                    <button onClick={this.showDeliveryInfoHandler}>add delivery info</button>
                ) : null}
                <Route path={this.props.match.path + '/delivery'} component={Delivery} />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        userProfile: state.user.userProfile,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actions.getUserProfile()),
        onGetDeliveryInfo: () => dispatch(actions.getDeliveryInfo()),
        onUpdateUserProfile: (formData, config) => dispatch(actions.updateUserProfile(formData, config)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))
