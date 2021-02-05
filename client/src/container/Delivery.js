import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../components/UI/Input'
import DeliveryInfoCard from '../components/User/DeliveryInfoCard'
import * as actions from '../store/actions/index'
import { updateObj, checkValidity } from '../utils/utilities'
import { icons } from '../utils/icons'

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
        submitStatus: {
            addNewDeliveryInfo: true,
            deliveryInfoId: '',
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

        this.setState({ ...this.state, controls: updatedControls })
    }

    submitHandler = async e => {
        e.preventDefault()

        const firstName = this.state.controls.firstName.val
        const lastName = this.state.controls.lastName.val
        const phone = this.state.controls.phone.val
        const address = this.state.controls.address.val
        const district = this.state.controls.district.val
        const city = this.state.controls.city.val
        const postalCode = this.state.controls.postalCode.val

        const formData = { firstName, lastName, phone, address, district, city, postalCode }

        this.state.submitStatus.addNewDeliveryInfo === true
            ? await this.props.onPostDeliveryInfo(formData)
            : await this.props.onUpdateDeliveryInfo(this.state.submitStatus.deliveryInfoId, formData)

        this.initFormHandler()
    }

    initFormHandler = e => {
        let updatedControls = updateObj(this.state.controls, {
            firstName: updateObj(this.state.controls.firstName, {
                val: '',
                eleConfig: updateObj(this.state.controls.firstName.eleConfig, { placeholder: ' ' }),
            }),
            lastName: updateObj(this.state.controls.lastName, {
                val: '',
                eleConfig: updateObj(this.state.controls.lastName.eleConfig, { placeholder: ' ' }),
            }),
            phone: updateObj(this.state.controls.phone, {
                val: '',
                eleConfig: updateObj(this.state.controls.phone.eleConfig, { placeholder: ' ' }),
            }),
            address: updateObj(this.state.controls.address, {
                val: '',
                eleConfig: updateObj(this.state.controls.address.eleConfig, { placeholder: ' ' }),
            }),
            district: updateObj(this.state.controls.district, {
                val: '',
                eleConfig: updateObj(this.state.controls.district.eleConfig, { placeholder: ' ' }),
            }),
            city: updateObj(this.state.controls.city, {
                val: '',
                eleConfig: updateObj(this.state.controls.city.eleConfig, { placeholder: ' ' }),
            }),
            postalCode: updateObj(this.state.controls.postalCode, {
                val: '',
                eleConfig: updateObj(this.state.controls.postalCode.eleConfig, { placeholder: ' ' }),
            }),
        })

        this.setState({
            controls: updatedControls,
            submitStatus: { ...this.state.submitStatus, addNewDeliveryInfo: true, deliveryInfoId: '' },
        })
    }

    deleteDeliveryInfoHandler = DID => {
        if (window.confirm('Are you sure you wish to delete this address?')) {
            this.props.onDeleteDeliveryInfo(DID)
        }

        this.initFormHandler()
    }

    getUpdateDeliveryInfoHandler = DID => {
        if (window.confirm('Are you sure you wish to update this address?')) {
            const updatedDeliveryInfo = this.props.deliveryInfoList.find(info => {
                return info._id === DID
            })

            this.props.onInitDeliveryInfoError()

            const updatedControls = updateObj(this.state.controls, {
                firstName: { ...this.state.controls.firstName, val: updatedDeliveryInfo.firstName },
                lastName: { ...this.state.controls.lastName, val: updatedDeliveryInfo.lastName },
                phone: { ...this.state.controls.phone, val: updatedDeliveryInfo.phone },
                address: { ...this.state.controls.address, val: updatedDeliveryInfo.address },
                district: { ...this.state.controls.district, val: updatedDeliveryInfo.district },
                city: { ...this.state.controls.city, val: updatedDeliveryInfo.city },
                postalCode: { ...this.state.controls.postalCode, val: updatedDeliveryInfo.postalCode },
            })

            this.setState({
                controls: updatedControls,
                submitStatus: { ...this.state.submitStatus, addNewDeliveryInfo: false, deliveryInfoId: DID },
            })
        }
    }

    cancelUpdateHandler = () => {
        this.initFormHandler()
    }

    closeDeliveryInfoSection = () => {
        this.props.history.replace('/user/profile')
        this.props.onInitDeliveryInfoError()
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

        let deliveryInfoCard = <span>No addresses currently saved</span>

        if (this.props.deliveryInfoList.length > 0) {
            deliveryInfoCard = this.props.deliveryInfoList.map(info => {
                return (
                    <DeliveryInfoCard
                        key={info._id}
                        DID={info._id}
                        list={info}
                        delete={this.deleteDeliveryInfoHandler}
                        update={this.getUpdateDeliveryInfoHandler}
                    />
                )
            })
        }

        return (
            <div className="deliveryContainer">
                <div className="deliveryInfoCardContainer">
                    <h6>address list</h6>
                    <div className="deliveryInfoCard">{deliveryInfoCard}</div>
                </div>
                <form onSubmit={this.submitHandler} className="deliveryInfoForm">
                    <h6>delivery info</h6>
                    {form}
                    <div className="btgp">
                        <button>{this.state.submitStatus.addNewDeliveryInfo ? 'create new one' : 'update'}</button>
                        {this.state.submitStatus.addNewDeliveryInfo ? null : (
                            <button onClick={this.cancelUpdateHandler}>cancel</button>
                        )}
                    </div>
                </form>
                <div className="deliveryInfoSectionClose" onClick={this.closeDeliveryInfoSection}>
                    {icons.close()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.user.userProfile,
        deliveryInfoList: state.user.deliveryInfoList,
        error: state.user.error,
        initFrom: state.user.initFrom,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetDeliveryInfo: () => dispatch(actions.getDeliveryInfo()),
        onPostDeliveryInfo: formData => dispatch(actions.postDeliveryInfo(formData)),
        onDeleteDeliveryInfo: DID => dispatch(actions.deleteDeliveryInfo(DID)),
        onUpdateDeliveryInfo: (DID, formData) => dispatch(actions.updateDeliveryInfo(DID, formData)),
        onInitDeliveryInfoError: () => dispatch(actions.initDeliveryInfoError()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delivery)
