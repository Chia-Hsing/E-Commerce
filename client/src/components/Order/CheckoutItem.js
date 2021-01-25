import React from 'react'

const CheckOutItem = props => {
    return (
        <section className="checkOutItem">
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.itemSize}</span>

            <div>
                <span className="editItems"></span>
            </div>
        </section>
    )
}

export default CheckOutItem
