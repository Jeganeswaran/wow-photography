import React from 'react'
import Logo from './logo';
import { Link } from "react-router-dom"
import {OpenModalBtn} from "../modals/modalbtns"

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
                    <li>About Us</li>
                    <li>Faq</li>
                    <li>Contact Us</li>
                    <li>
                        <OpenModalBtn 
                            className="btn-a font-weight-bold f-14" 
                            modalName="SIGNIN_MODAL"
                        >
                            Sign In
                        </OpenModalBtn>
                    </li>
                    <li className="font-weight-bold">
                        <OpenModalBtn 
                            className="btn-a font-weight-bold f-14" 
                            modalName="SIGNUP_MODAL"
                        >
                            Sign Up
                        </OpenModalBtn>
                    </li>
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
