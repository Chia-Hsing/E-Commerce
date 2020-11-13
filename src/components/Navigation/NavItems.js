import React from 'react'
import NavItem from './NavItem'
import DropDown from './DropDown'
import '../../styles/navigation.scss'

const NavItems = props => {
    return (
        <nav className="navItems">
            <NavItem>man</NavItem>
            <DropDown />
            <NavItem>women</NavItem>
            <NavItem>accessories</NavItem>
            <NavItem>search</NavItem>
        </nav>
    )
}

export default NavItems
