import React from 'react'

import '../../scss/navigation.scss'

const backdrop = props => (props.show ? <div className="backdrop" onClick={props.close}></div> : null)

export default backdrop
