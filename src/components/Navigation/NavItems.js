import React from 'react'
import NavItem from './NavItem'
import DropDown from './DropDown'
import '../../styles/navigation.scss'

const NavItems = props => {
    return (
        <nav className={props.class}>
            <NavItem>man</NavItem>
            <DropDown
                firstItem="TEES"
                secondItem="SHIRTS"
                thirdItem="HOODIES&SWEATERS"
                fourthItem="JACKETS&VESTS"
                fifthItem="PANTS&JEANS"
            />
            <NavItem>women</NavItem>
            <DropDown
                firstItem="TEES"
                secondItem="SHIRTS"
                thirdItem="HOODIES&SWEATERS"
                fourthItem="JACKETS&VESTS"
                fifthItem="DRESSES"
            />
            <NavItem>search</NavItem>
        </nav>
    )
}

export default NavItems
