import React from 'react'
import DropDownItem from './DropDownItem'
import '../../styles/navigation.scss'

const dropDown = props => {
    return (
        <ul className="dropDown">
            <DropDownItem link="">{props.firstItem}</DropDownItem>
            <DropDownItem link="">{props.secondItem}</DropDownItem>
            <DropDownItem link="">{props.thirdItem}</DropDownItem>
            <DropDownItem link="">{props.fourthItem}</DropDownItem>
            <DropDownItem link="">{props.fifthItem}</DropDownItem>
        </ul>
    )
}

export default dropDown
