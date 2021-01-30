import React from 'react'

import { icons } from '../../utils/icons'

const DeliveryInfoCard = props => {
    return (
        <div className="deliveryInfoCard">
            {Object.keys(props.list).length > 0 ? (
                <>
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
                        <span onClick={props.delete}>{icons.close()}</span>
                        <span>{icons.edit()}</span>
                    </div>
                </>
            ) : (
                <span>No addresses currently saved</span>
            )}
        </div>
    )
}

export default DeliveryInfoCard
