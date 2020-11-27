import React from 'react'
import Category from './Category'

import '../../../scss/categories.scss'

const Categories = props => {
    return (
        <div className="categories">
            <Category cat="TEES" />
            <Category cat="SHIRTS" />
            <Category cat="HOODIES&SWEATERS" />
            <Category cat="JACKETS&VESTS" />
            <Category cat="PANTS&JEANS" />
            <Category cat="DRESSES" />
        </div>
    )
}

export default Categories
