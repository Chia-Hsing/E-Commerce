import React from 'react'
import DropDownItem from './DropDownItem'
import '../../styles/navigation.scss'

const DropDown = props => {
    const classes = ['dropDown']

    if (props.dropDownOpenOne || props.dropDownOpenTwo) {
        classes.push('active')
    }

    return (
        <ul className={classes.join(' ')}>
            <DropDownItem link="">{props.firstItem}</DropDownItem>
            <DropDownItem link="">{props.secondItem}</DropDownItem>
            <DropDownItem link="">{props.thirdItem}</DropDownItem>
            <DropDownItem link="">{props.fourthItem}</DropDownItem>
            <DropDownItem link="">{props.fifthItem}</DropDownItem>
        </ul>
    )
}

export default DropDown
