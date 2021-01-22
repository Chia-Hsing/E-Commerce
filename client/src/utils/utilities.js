import Swal from 'sweetalert2'
import jwt_decode from 'jwt-decode'

export const updateObj = (oldObj, updatedProperties) => {
    return {
        ...oldObj,
        ...updatedProperties,
    }
}

export const alert = Swal.mixin({
    customClass: {
        toast: true,
        confirmButton: 'btn btn-light',
        position: 'center',
        timer: 3000,
    },
    buttonsStyling: false,
})

// regarding image response, the backend returns the type of array buffer, so need a converter to convert it to a readable string.
export const arrayBufferToBase64Img = buffer => {
    // Creates a new Uint8Array object, and fromCharCode() returns a string created from the specified sequence of UTF-16 code units

    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
    }

    // The btoa() method encodes a string in base-64.
    return `data:image/jpeg;base64,${window.btoa(binary)}`
}

export const checkBagFromLS = () => {
    if (localStorage.bagToken) {
        // bagToken: { token: ...}
        // bagToken: { items: { bag: []}, iat:..., exp:... } (after jwt_decode)
        if (jwt_decode(localStorage.getItem('bagToken')).exp < Date.now()) {
            localStorage.removeItem('bagToken')
            return {}
        } else {
            const items = jwt_decode(localStorage.getItem('bagToken'))

            // bagItems: { items: { bag: []}, iat:..., exp:... }
            return items
        }
    }
    return []
}

export const checkValidity = (value, rule) => {
    let isValid = true

    if (!rule) return true

    if (rule.required) {
        isValid = value.trim() === '' && isValid
    }

    if (rule.minLength) {
        isValid = value.length >= rule.minlength && isValid
    }

    if (rule.maxLength) {
        isValid = value.length <= rule.maxlength && isValid
    }

    if (rule.isPassword) {
        const regex = /^\S{8,12}$/
        const PWCheck = value.match(regex)
        isValid = PWCheck && isValid
    }

    if (rule.isEmail) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const emailCheck = value.match(regex)
        isValid = emailCheck && isValid
    }

    if (rule.isPhone) {
        const regex = /09\d{2}(\d{6}$|-\d{3}-\d{3})$/
        const phoneCheck = value.match(regex)
        isValid = phoneCheck && isValid
    }

    if (rule.isPostalCode) {
        const regex = /^\d{5}$|^\d{3}$/
        const PostalCodeCheck = value.match(regex)
        isValid = PostalCodeCheck && isValid
    }

    return isValid
}
