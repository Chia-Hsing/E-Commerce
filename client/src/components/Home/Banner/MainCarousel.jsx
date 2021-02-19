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
                        src="https://gigaplus.makeshop.jp/dmountain/img/bnr_top/arc_20201114.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/img/bnr_top/cdgh_20201115.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/img/bnr_top/camp_20201103.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gigaplus.makeshop.jp/dmountain/img/bnr_top/women_20201109.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default MainCarousel
