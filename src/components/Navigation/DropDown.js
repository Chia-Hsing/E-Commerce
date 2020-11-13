import React from 'react'
import DropDownItem from './DropDownItem'
import '../../styles/navigation.scss'

const dropDown = props => {
    return (
        <ui className="dropDown">
            <DropDownItem link="">TEES</DropDownItem>
            <DropDownItem link="">SHIRTS</DropDownItem>
            <DropDownItem link="">HOODIES&SWEATERS</DropDownItem>
            <DropDownItem link="">JACKETS&VESTS</DropDownItem>
            <DropDownItem link="">PANTS&JEANS</DropDownItem>
        </ui>
    )
}

export default dropDown
