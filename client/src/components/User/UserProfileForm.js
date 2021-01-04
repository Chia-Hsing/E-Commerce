import React from 'react'

import Input from '../UI/Input'

const UserProfileForm = props => {
    let form = props.formElement.map(ele => {
        return (
            <Input
                error={props.error}
                key={ele.key}
                label={ele.key}
                value={ele.config.val}
                type={ele.config.eleType}
                config={ele.config.eleConfig}
                isValid={ele.config.valid}
                touched={ele.config.touched}
                shouldValidate={ele.config.validation}
                inputChange={e => props.inputChangeHandler(e, ele.key)}
            />
        )
    })

    let avatarUpload = (
        <>
            <input
                type="file"
                id="file"
                className="fileInput"
                name="avatar"
                accept=".png, .jpg, .jpeg"
                onChange={e => props.fileChange(e)}
            />
            <div onClick={props.fileClick} style={{ width: '100px', height: '100px' }}>
                <img src={props.avatar} alt="avatar" style={{ width: '100%', height: '100%' }} />
            </div>
        </>
    )

    return (
        <form onSubmit={props.submitHandler} className="userProfileDetail">
            {form}
            {avatarUpload}

            <button>Update</button>
        </form>
    )
}

export default UserProfileForm
