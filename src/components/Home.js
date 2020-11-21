import React, { Component } from 'react'
import Layout from './Layout'
import MainCarousel from './Banner/MainCarousel'
import MerchandiseCarousel from './Merchandise/MerchandiseCarousel'

class Home extends Component {
    render() {
        return (
            <Layout>
                <MainCarousel />
                <MerchandiseCarousel />
            </Layout>
        )
    }
}

export default Home
