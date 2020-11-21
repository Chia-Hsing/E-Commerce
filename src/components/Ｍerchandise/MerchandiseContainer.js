import React from 'react'
import MerchandiseItems from './MerchandiseItems'
import '../../styles/merchandise.scss'

const MerchandiseContainer = props => {
    return (
        <section className="MerchandiseContainer">
            <MerchandiseItems />
        </section>
    )
}

export default MerchandiseContainer
