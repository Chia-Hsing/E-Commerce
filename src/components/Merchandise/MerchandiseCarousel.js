import React from 'react'
import Slider from 'react-slick'
import MerchandiseItem from './MerchandiseItem'

import '../../styles/merchandise.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick}>
            {/* <svg focusable="false" width="1em" height="1em" viewBox="0 0 42 42">
                <path
                    fillRule="evenodd"
                    d="M13.933 1L34 21.068L14.431 40.637l-4.933-4.933l14.638-14.636L9 5.933z"
                    fill="currentColor"
                ></path>
            </svg> */}
        </div>
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />
}

const MerchandiseCarousel = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                arrows: false,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className="MerchandiseCarousel">
            <h2> Responsive </h2>
            <Slider {...settings}>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
                <div>
                    <MerchandiseItem />
                </div>
            </Slider>
        </div>
    )
}

export default MerchandiseCarousel
