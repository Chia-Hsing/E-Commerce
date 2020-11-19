import React from 'react'
import '../../styles/navigation.scss'

const backdrop = props => (props.show ? <div className="backdrop" onClick={props.close}></div> : null)

export default backdrop
