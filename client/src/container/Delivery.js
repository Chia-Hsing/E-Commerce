import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../components/UI/Input'
import DeliveryInfoCard from '../components/User/DeliveryInfoCard'
import * as actions from '../store/actions/index'
import { updateObj, checkValidity } from '../utils/utilities'
import '../scss/userProfile.scss'

class Delivery extends Component {
    state = {
        controls: {
            firstName: {
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
            lastName: {
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
            district: {
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

    // async componentDidMount() {
    //     await this.props.getDeliveryInfo()
    // }

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

        const firstName = this.state.controls.firstName.val
        const lastName = this.state.controls.lastName.val
        const phone = this.state.controls.phone.val
        const address = this.state.controls.address.val
        const district = this.state.controls.district.val
        const city = this.state.controls.city.val
        const postalCode = this.state.controls.postalCode.val

        const formData = { firstName, lastName, phone, address, district, city, postalCode }

        this.props.onPostDeliveryInfo(formData)
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
            <section className="deliveryContainer">
                <DeliveryInfoCard />
                <form onSubmit={this.submitHandler} className="deliveryInfoForm">
                    <h6>delivery info</h6>
                    {form}
                    <button>create</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.user.userProfile,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDeliveryInfo: () => dispatch(actions.getDeliveryInfo()),
        onPostDeliveryInfo: formData => dispatch(actions.postDeliveryInfo(formData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delivery)
