import React from 'react'
import DropDownItem from './DropDownItem'
import '../../../scss/navigation.scss'

const DropDown = props => {
    return (
        <ul className="dropDown">
            <DropDownItem link="/TEES">{props.firstItem}</DropDownItem>
            <DropDownItem link="">{props.secondItem}</DropDownItem>
            <DropDownItem link="">{props.thirdItem}</DropDownItem>
            <DropDownItem link="">{props.fourthItem}</DropDownItem>
            <DropDownItem link="">{props.fifthItem}</DropDownItem>
        </ul>
    )
}

export default DropDown
