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

    switch (props.type) {
        case 'input':
            eleInput = (
                <>
                    <input
                        className={inputClass.join(' ')}
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                    />

                    <label className="labelName">
                        {props.error && <span className="errorMSG">{props.error[props.label]}</span>}
                        <span className="contentName">{props.label}</span>
                    </label>
                </>
            )
            break
        case 'select':
            eleInput = (
                <>
                    <select className={inputClass.join(' ')} value={props.value} onChange={props.inputChange}>
                        <option defaultValue>{props.config.placeholder}</option>
                        {props.config.options.map(option => {
                            return (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            )
                        })}
                    </select>
                    <label className="labelName">
                        <span className="contentName">{props.label}</span>
                    </label>
                </>
            )
            break
        default:
            eleInput = (
                <>
                    <input
                        className={inputClass.join(' ')}
                        value={props.value}
                        {...props.config}
                        onChange={props.inputChange}
                    />
                    <label className="labelName">
                        {props.error && <span className="errorMSG">{props.error[props.label]}</span>}
                        <span className="contentName">{props.label}</span>
                    </label>
                </>
            )
            break
    }

    return (
        <>
            <div className="inputBody">{eleInput}</div>
        </>
    )
}

export default Input
