import React, { useRef } from 'react'

const FileUploader = props => {
    const fileInput = useRef(null)

    const handleFileInput = () => {
        const files = fileInput.current.files
        props.fileChange(files)
    }
    return (
        <>
            <div className="avatarUpload">
                <label htmlFor="file" className="label" />
                <input
                    id="file"
                    ref={fileInput}
                    type="file"
                    className="fileInput"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileInput}
                />
                <img src={props.img} alt="avatar" />
            </div>
        </>
    )
}

export default FileUploader
