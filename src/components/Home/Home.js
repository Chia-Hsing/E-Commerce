import React, { Component } from 'react'
import Layout from '../Layout'
import MainCarousel from './Banner/MainCarousel'
import MerchandiseContainer from './Merchandise/MerchandiseContainer'
import CategoriesContainer from './Categories/CategoriesContainer'

class Home extends Component {
    render() {
        return (
            <Layout>
                <MainCarousel />
                <MerchandiseContainer />
                <CategoriesContainer />
            </Layout>
        )
    }
}

export default Home
