import React from 'react'
import MerchandiseCarousel from './MerchandiseCarousel'
import '../../styles/merchandise.scss'

const MerchandiseContainer = props => {
    return (
        <section className="MerchandiseContainer">
            <MerchandiseCarousel />
        </section>
    )
}

export default MerchandiseContainer
