import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../styles/index.scss'
import '../../styles/carousel.scss'
import a from '../../assets/img/1.jpg'
import b from '../../assets/img/2.jpg'
import c from '../../assets/img/3.jpg'

const MainCarousel = props => {
    return (
        <Carousel controls="false" className="MainCarousel">
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

export default MainCarousel
