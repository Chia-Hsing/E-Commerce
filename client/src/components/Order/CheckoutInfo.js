import React from 'react'

const CheckoutInfo = props => {
    const list = props.deliveryInfoList.map(info => {
        return (
            <li>
                <input type="radio" name="shippingInfo" value={info._id} />
                <span>
                    <strong>{info.firstName}</strong>
                    <strong>{info.lastName}</strong>
                </span>
                <span>
                    <em>
                        {info.address}
                        {info.district}
                        {info.city}
                        {info.postalCode}
                    </em>
                </span>
                <span>
                    <em>{info.phone}</em>
                </span>
            </li>
        )
    })

    return (
        <>
            <div>
                <span>user</span>
                <span>delivery information</span>
            </div>
            <div>
                <span>{props.username}</span>
                <span>{props.email}</span>
            </div>
            <ul>{list}</ul>
        </>
    )
}

export default CheckoutInfo
