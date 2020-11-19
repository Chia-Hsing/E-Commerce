import React from 'react'
import '../../styles/navigation.scss'

export const HeroiconsSolidMenuAlt2 = props => {
    return (
        <div className="menuToggle" onClick={props.clicked}>
            <svg focusable="false" width="1em" height="1em" viewBox="0 0 20 20">
                <g fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                        fill="currentColor"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                        fill="currentColor"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                        fill="currentColor"
                    ></path>
                </g>
            </svg>
        </div>
    )
}
