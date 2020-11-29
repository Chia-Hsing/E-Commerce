import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from './Layout'
import MainCarousel from '../components/Home/Banner/MainCarousel'
import MerchandiseContainer from '../components/Home/Merchandise/MerchandiseContainer'
import CategoriesContainer from '../components/Home/Categories/CategoriesContainer'
import * as actions from '../store/actions/index'

export class Home extends Component {
    async componentDidMount() {
        await this.props.onGetMainMaterials()
    }

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

const mapStateToProps = state => {
    return {
        materials: state.mainMaterials.materials,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMainMaterials: () => dispatch(actions.getMainMaterials()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
