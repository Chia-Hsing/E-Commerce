import React from 'react'
import NavItem from './NavItem'
import DropDown from './DropDown'
import '../../../scss/navigation.scss'

const NavItems = props => {
    return (
        <nav className={props.class}>
            <NavItem>men</NavItem>
            <DropDown
                firstItem="TEES"
                secondItem="SHIRTS"
                thirdItem="HOODIES&SWEATERS"
                fourthItem="JACKETS&VESTS"
                fifthItem="PANTS&JEANS"
                gender="men"
            />
            <NavItem>women</NavItem>
            <DropDown
                firstItem="TEES"
                secondItem="SHIRTS"
                thirdItem="HOODIES&SWEATERS"
                fourthItem="JACKETS&VESTS"
                fifthItem="DRESSES"
                gender="women"
            />
            <NavItem>search</NavItem>
        </nav>
    )
}

export default NavItems
