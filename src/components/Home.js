import React, { Component } from 'react'
import Layout from './Layout'
import Carousel from '../components/Carousel/Carousel'

class Home extends Component {
    render() {
        return (
            <Layout>
                <Carousel />
            </Layout>
        )
    }
}

export default Home
