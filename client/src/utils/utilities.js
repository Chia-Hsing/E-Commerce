import Swal from 'sweetalert2'

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
