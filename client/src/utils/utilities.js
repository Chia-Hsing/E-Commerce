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
    const str = String.fromCharCode(...new Uint8Array(buffer))
    // The btoa() method encodes a string in base-64.
    return `data:image/jpeg;base64,${window.btoa(str)}`
}

export const checkCartFromLS = () => {
    if (localStorage.cart) {
        if (jwt_decode(localStorage.getItem('cart')).exp < Date.now()) {
            localStorage.removeItem('cart')
            return {}
        } else {
            const item = jwt_decode(localStorage.getItem('cart').token)
            return item
        }
    }
    return {}
}
