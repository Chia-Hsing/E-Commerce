import React, { Component } from 'react'
import Layout from './Layout'
import MainCarousel from './Banner/MainCarousel'

class Home extends Component {
    render() {
        return (
            <Layout>
                <MainCarousel />
            </Layout>
        )
    }
}

export default Home
