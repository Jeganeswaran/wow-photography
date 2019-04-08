import React from 'react'
import Logo from './logo';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="flex-between header-height">
                <div className="logo-holder">
                    <Link to="/" className="d-block">
                        <Logo className="logo" />
                    </Link>
                </div>
                <ul className="menu-list">
                    <li>About us</li>
                    <li>Faq</li>
                    <li>Contact us</li>
                    <li className="font-weight-bold">Sign in</li>
                    <li className="font-weight-bold">Sign up</li>
                    <li>
                        <button className="btn btn-theme btn-rounded">
                            <i className="fas fa-plus-circle mr-1"></i> Create a post
                            </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
