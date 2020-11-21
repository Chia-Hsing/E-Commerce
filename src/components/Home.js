import React, { Component } from 'react'
import Layout from './Layout'
import CarouselBanner from './CarouselBanner/CarouselBanner'

class Home extends Component {
    render() {
        return (
            <Layout>
                <CarouselBanner />
            </Layout>
        )
    }
}

export default Home
