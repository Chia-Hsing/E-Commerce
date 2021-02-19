import React from 'react'
import { css } from '@emotion/core'
import RiseLoader from 'react-spinners/RiseLoader'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
`

const Spinner = props => {
    return (
        <div className="spinner">
            <RiseLoader css={override} size={40} color={'#ccc012'} loading={props.loading} />
        </div>
    )
}

export default Spinner
