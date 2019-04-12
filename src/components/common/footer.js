import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex-between flex-wrap pt-4 pb-4 pl-3 pr-3">
                <ul className="menu-list">
                    <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/terms-and-conditions">Terms & conditions</Link>
                    </li>
                    <li>
                        <Link to="/refund-policy">Refund Policy</Link>
                    </li>
                </ul>
                <ul className="menu-list">
                    <li>Copyrights 2019</li>
                    <li>Powered by billiontags</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
