import React from 'react'
import Categories from './Categories'
import '../../../scss/categories.scss'

const CategoriesContainer = props => {
    return (
        <section className="categoriesContainer">
            <h2>Categories</h2>
            <Categories />
        </section>
    )
}

export default CategoriesContainer
