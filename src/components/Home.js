import React, { Component } from 'react'
import Layout from './Layout'
import MainCarousel from './Banner/MainCarousel'
import MerchandiseContainer from './Merchandise/MerchandiseContainer'

class Home extends Component {
    render() {
        return (
            <Layout>
                <MainCarousel />
                <MerchandiseContainer />
            </Layout>
        )
    }
}

export default Home
