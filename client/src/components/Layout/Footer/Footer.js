import React from 'react'
import { Link } from 'react-router-dom'

import '../../../scss/footer.scss'

const Footer = props => {
    return (
        <footer>
            <div className="icon-gp">
                <div className="icon-item">
                    <Link>
                        <svg focusable="false" width="1em" height="1em" viewBox="0 0 24 24">
                            <path
                                d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </Link>
                </div>

                <div className="icon-item">
                    <Link>
                        <svg focusable="false" width="1em" height="1em" viewBox="0 0 20 20">
                            <path
                                d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2zM9.984 15.523a5.539 5.539 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539zM6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0zM16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </Link>
                </div>

                <div className="icon-item">
                    <a href="https://github.com/Chia-Hsing/E-Commerce-react">
                        <svg focusable="false" width="1em" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="detail">
                <div className="ft-item">
                    <span>
                        <Link>contact</Link>
                    </span>
                    <span>
                        <Link>policy</Link>
                    </span>
                </div>
            </div>
            <div className="copyright">
                <span>&copy; {new Date().getFullYear()} three beats</span>
            </div>
        </footer>
    )
}

export default Footer
