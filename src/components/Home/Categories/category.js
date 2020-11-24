import React from 'react'
import d from '../../../assets/img/6.jpg'

const Category = props => {
    return (
        <div className="category">
            <div className="imgContainer">
                <img src={d} alt=""></img>
                <div className="cat">
                    <span>{props.cat}</span>
                </div>
            </div>
        </div>
    )
}

export default Category
