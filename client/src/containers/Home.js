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
        await this.props.onInitProducts()
    }

    errorAlertHandler = msg => {
        alert
            .fire({
                title: 'Oops...',
                text: msg,
                icon: 'warning',
                iconHtml: '!',
                iconColor: '#2a2c30',
                confirmButtonText: 'redirect to homepage',
            })
            .then(result => {
                if (result.isConfirmed) {
                    this.props.history.push('/')
                }
            })
    }

    render() {
        let mainPage = null

        if (this.props.mainCategories) {
            mainPage = (
                <>
                    {this.props.error ? this.errorAlertHandler(this.props.error) : null}
                    <MainCarousel />
                    <MerchandiseCarousel newArrival={this.props.newArrival} />
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
        newArrival: state.mainMaterials.newArrival,
        error: state.mainMaterials.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMainMaterials: () => dispatch(actions.getMainMaterials()),
        onInitProducts: () => dispatch(actions.initProducts),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.propTypes = {
    mainCategories: PropTypes.array,
    newArrival: PropTypes.array,
    error: PropTypes.object,
    onGetMainMaterials: PropTypes.func,
}
