import React from 'react'
import DropDownItem from './DropDownItem'
import '../../../scss/navigation.scss'

const DropDown = props => {
    let dropdown = ['dropDown']

    if (props.close) {
        dropdown.push('close')
    }

    return (
        <ul className={dropdown.join(' ')}>
            <DropDownItem gender={props.gender} link={props.firstItem}>
                {props.firstItem}
            </DropDownItem>
            <DropDownItem gender={props.gender} link={props.secondItem}>
                {props.secondItem}
            </DropDownItem>
            <DropDownItem gender={props.gender} link={props.thirdItem}>
                {props.thirdItem}
            </DropDownItem>
            <DropDownItem gender={props.gender} link={props.fourthItem}>
                {props.fourthItem}
            </DropDownItem>
            <DropDownItem gender={props.gender} link={props.fifthItem}>
                {props.fifthItem}
            </DropDownItem>
        </ul>
    )
}

export default DropDown
