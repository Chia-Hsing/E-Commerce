import React from 'react'
import CategoryItem from './CategoryItem'
import PropsTypes from 'prop-types'

import '../../../scss/categoriesBanner.scss'

const Categories = props => {
    const category = props.mainCategories.map(item => {
        return <CategoryItem cat={item.name} img={item.img} key={item.name} />
    })

    return (
        <section className="categoriesContainer">
            <h2>Categories</h2>
            <div className="categories">{category}</div>
        </section>
    )
}

export default Categories

Categories.propsTypes = { mainCategories: PropsTypes.array }
