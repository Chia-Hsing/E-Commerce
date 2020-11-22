import React from 'react'
import MerchandiseCarousel from './MerchandiseCarousel'
import '../../styles/merchandise.scss'

const MerchandiseContainer = props => {
    return (
        <section className="MerchandiseContainer">
            <h2>New Arrival</h2>
            <MerchandiseCarousel />
        </section>
    )
}

export default MerchandiseContainer
