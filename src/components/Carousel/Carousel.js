import React from 'react'
import '../../styles/carousel.scss'

const carousel = props => {
    return (
        <section>
            <div className="slider">
                <div className="slide">
                    <img src="../../img/1.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="../../img/2.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="../../img/3.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="../../img/4.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="../../img/5.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default carousel
