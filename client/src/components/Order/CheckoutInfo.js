import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutInfo = props => {
    const list = props.deliveryInfoList.map(info => {
        return (
            <li key={info._id}>
                <input
                    type="radio"
                    name="shippingInfo"
                    onChange={props.ticked}
                    checked={info._id === props.selectedId}
                    value={info._id}
                />
                <div className="deliveryInfoList">
                    <span>
                        <strong>{info.firstName}</strong>
                        <strong>{info.lastName}</strong>
                    </span>
                    <span>
                        <em>{info.address}</em>
                        <em>{info.district}</em>
                        <em>{info.city}</em>
                        <em>{info.postalCode}</em>
                    </span>
                    <span>
                        <em>{info.phone}</em>
                    </span>
                </div>
            </li>
        )
    })

    return (
        <>
            <section className="userInfoWrap">
                <span className="userInfoTitle">user</span>
                <ul className="userInfoList">
                    <li>{props.username}</li>
                    <li>{props.email}</li>
                </ul>
            </section>
            <section className="deliveryInfoWrap">
                <span className="deliveryInfoTitle">delivery Info.</span>
                <ul>
                    {list}
                    <li>
                        <Link to="/user/profile/delivery">+ edit delivery info.</Link>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default CheckoutInfo
