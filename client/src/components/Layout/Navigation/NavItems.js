import React from 'react'
import NavItem from './NavItem'
import DropDown from './DropDown'
import '../../../scss/navigation.scss'

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
                gender="man"
            />
            <NavItem>woman</NavItem>
            <DropDown
                firstItem="TEES"
                secondItem="SHIRTS"
                thirdItem="HOODIES&SWEATERS"
                fourthItem="JACKETS&VESTS"
                fifthItem="DRESSES"
                gender="woman"
            />
            <NavItem>search</NavItem>
        </nav>
    )
}

export default NavItems
