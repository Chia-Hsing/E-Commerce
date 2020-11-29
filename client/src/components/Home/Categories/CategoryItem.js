import React from 'react'
import PropTypes from 'prop-types'

const Category = props => {
    return (
        <div className="category">
            <div className="imgContainer">
                <img src={props.img} alt={props.cat}></img>
                <div className="cat">
                    <span>{props.cat}</span>
                </div>
            </div>
        </div>
    )
}

export default Category

Category.propsTypes = {
    img: PropTypes.string,
    cat: PropTypes.string,
}
