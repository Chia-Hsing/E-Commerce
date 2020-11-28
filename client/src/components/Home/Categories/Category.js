import React from 'react'

const Category = props => {
    return (
        <div className="category">
            <div className="imgContainer">
                <img
                    src="https://makeshop-multi-images.akamaized.net/dmountain/shopimages/07/24/29_000000012407.jpg?1603619837"
                    alt=""
                ></img>
                <div className="cat">
                    <span>{props.cat}</span>
                </div>
            </div>
        </div>
    )
}

export default Category
