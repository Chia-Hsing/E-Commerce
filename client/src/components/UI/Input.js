import React from 'react'

const Input = props => {
    let eleInput = null

    let inputClass = ['input']

    if (!props.isValid && props.shouldValidate && props.touched) {
        inputClass.push('invalid')
    }

    if (props.value === '') {
        inputClass.pop('invalid')
    }

    switch (props.eleType) {
        case 'input':
            eleInput = (
                <input
                    className={inputClass.join(' ')}
                    value={props.value}
                    {...props.config}
                    onChange={props.inputChange}
                />
            )
            break
        case 'select':
            eleInput = (
                <select
                    className={inputClass.join(' ')}
                    value={props.value}
                    {...props.config}
                    onChange={props.inputChange}
                />
            )
            break
        case 'textarea':
            eleInput = (
                <textarea
                    className={inputClass.join(' ')}
                    value={props.value}
                    {...props.config}
                    onChange={props.inputChange}
                />
            )
            break
        default:
            eleInput = (
                <input
                    className={inputClass.join(' ')}
                    value={props.value}
                    {...props.config}
                    onChange={props.inputChange}
                />
            )
            break
    }

    return (
        <>
            <div className="inputBody">
                {eleInput}

                <label className="labelName">
                    <span className="contentName">{props.label}</span>
                </label>
            </div>
        </>
    )
}

export default Input
