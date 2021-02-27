import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../../scss/carousel.scss'

const MainCarousel = props => {
    return (
        <section>
            <Carousel className="MainCarousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/img/bnr_top/brooxon_20210226.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/21SS_20210217.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/CG_20210210.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/img/bnr_top/visvim_21SS_0126.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default MainCarousel
