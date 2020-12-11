import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Category = props => {
    return (
        <Link
            to={{
                pathname: '/products',
                search: `category=${props.cat}`,
            }}
        >
            <div className="category">
                <div className="imgContainer">
                    <img src={props.img} alt={props.cat}></img>
                    <div className="cat">
                        <span>{props.cat}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Category

Category.propsTypes = {
    img: PropTypes.string,
    cat: PropTypes.string,
}
