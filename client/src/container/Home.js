import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MainCarousel from '../components/Home/Banner/MainCarousel'
import MerchandiseCarousel from '../components/Home/Merchandise/MerchandiseCarousel'
import CategoriesBanner from '../components/Home/Categories/CategoriesBanner'
import * as actions from '../store/actions/index'
import '../scss/home.scss'

export class Home extends Component {
    async componentDidMount() {
        await this.props.onGetMainMaterials()
    }

    render() {
        let mainPage
        // = this.props.error ? <div> </div> : null

        if (this.props.mainCategories) {
            mainPage = (
                <>
                    <MainCarousel />
                    <MerchandiseCarousel />
                    <CategoriesBanner mainCategories={this.props.mainCategories} />
                </>
            )
        }

        return <>{mainPage}</>
    }
}

const mapStateToProps = state => {
    return {
        mainCategories: state.mainMaterials.mainCategories,
        error: state.mainMaterials.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMainMaterials: () => dispatch(actions.getMainMaterials()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.propTypes = {
    mainCategories: PropTypes.array,
    error: PropTypes.string,
    onGetMainMaterials: PropTypes.func,
}
