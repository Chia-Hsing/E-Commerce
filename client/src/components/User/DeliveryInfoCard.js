import React from 'react'

import { icons } from '../../utils/icons'

const DeliveryInfoCard = props => {
    const deleteDeliveryItem = () => {
        props.delete(props.DID)
    }

    return (
        <div className="deliveryInfoCardDetailWrap">
            <div className="deliveryInfoCardDetail">
                <span className="name">
                    {props.list.firstName} {props.list.lastName}
                </span>
                <span className="phone">{props.list.phone}</span>
                <span className="address">
                    {props.list.address} {props.list.district}
                </span>
                <span className="city">
                    {props.list.city} {props.list.postalCode}
                </span>
            </div>
            <div className="operation">
                <span onClick={deleteDeliveryItem}>{icons.close()}</span>
                <span>{icons.edit()}</span>
            </div>
        </div>
    )
}

export default DeliveryInfoCard
