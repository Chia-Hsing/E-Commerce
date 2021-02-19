import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import MerchandiseItem from './MerchandiseItem'
import { arrayBufferToBase64Img } from '../../../utils/utilities'

import '../../../scss/merchandise.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

const MerchandiseCarousel = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    let newArrival = null

    if (props.newArrival.length > 0) {
        newArrival = props.newArrival.map(item => {
            const img = arrayBufferToBase64Img(item.image.data)

            return (
                <div key={item.name}>
                    <MerchandiseItem img={img} name={item.name} price={item.price} _id={item._id} />
                </div>
            )
        })
    }

    return (
        <section className="MerchandiseContainer">
            <h2>New Arrival</h2>

            <div className="MerchandiseCarousel">
                <Slider {...settings}>{newArrival}</Slider>
            </div>
        </section>
    )
}

export default MerchandiseCarousel

MerchandiseCarousel.propTypes = {
    newArrival: PropTypes.array,
}
