import React from 'react'
import Logo from './logo';
import { NavLink } from "react-router-dom"
import Links, { SignInOut, HamBtn } from './links';

const Header = () => {
    return (
        <header className="header">
            <div className="flex-between header-height">
                <div className="show-header">
                    <HamBtn />
                </div>
                <div className="logo-holder">
                    <NavLink to="/" className="d-block">
                        <Logo className="logo" />
                    </NavLink>
                </div>
                <div className="d-flex align-items-center hide-header">
                    <ul className="menu-list header-list">
                        <Links />
                    </ul>
                </div>
                <div className="show-header">
                    <SignInOut />
                </div>
            </div>
        </header>
    )
}

export default Header
