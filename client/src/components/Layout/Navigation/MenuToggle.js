import React from 'react'

import { icons } from '../../../utils/icons'
import '../../../scss/navigation.scss'

const MenuToggle = props => {
    return (
        <div className="menuToggle" onClick={props.clicked}>
            {icons.toggle()}
        </div>
    )
}

export default MenuToggle
