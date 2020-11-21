import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../../styles/index.scss'
import '../../styles/carousel.scss'
import a from '../../img/1.jpg'
import b from '../../img/2.jpg'
import c from '../../img/3.jpg'

const CarouselBanner = props => {
    return (
        <Carousel className="slider">
            <Carousel.Item>
                <img className="d-block w-100" src={a} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={b} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={c} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBanner
