import React from 'react'
import Logo from './logo';
import { NavLink } from "react-router-dom"
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import { logout_url } from '../../redux/actions/constants';
import { closeModal, addToast } from '../../redux/actions/common';
import { logOutUser } from '../../redux/actions/user';

const Header = ({ isToken, closeModal, addToast, logOutUser }) => {
    return (
        <header className="header">
            <div className="flex-between header-height">
                <div className="logo-holder">
                    <NavLink to="/" className="d-block">
                        <Logo className="logo" />
                    </NavLink>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="menu-list header-list">
                        {!isToken ?
                            <>
                                <li>
                                    <OpenModalBtn
                                        className="btn-a f-14"
                                        modalName="SIGNIN_MODAL"
                                    >
                                        Sign In
                                    </OpenModalBtn>
                                </li>
                                <li>
                                    <OpenModalBtn
                                        className="btn-a f-14"
                                        modalName="SIGNUP_MODAL"
                                    >
                                        Sign Up
                                    </OpenModalBtn>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink exact activeClassName="theme-red" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="theme-red" to="/my-profile">
                                        My Profile
                                    </NavLink>
                                </li>
                            </>
                        }
                        <li>
                            <NavLink activeClassName="theme-red" to="/about-us">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="theme-red" to="/announcements">
                                Announcements
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="theme-red" to="/faq">
                                Faq
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="theme-red" to="/contact-us">
                                Contact Us
                            </NavLink>
                        </li>
                        {
                            isToken &&
                            <>
                                <li>
                                    <OpenModalBtn
                                        className="btn-a f-14"
                                        modalName="LOADING_MODAL"
                                        modalProps={{
                                            config: {
                                                url: logout_url,
                                                method: "DELETE"
                                            },
                                            succFunc(data) {
                                                logOutUser();
                                                closeModal();
                                            },
                                            errFunc(data) {
                                                addToast(data, false);
                                                closeModal();
                                            }
                                        }}
                                    >
                                        Sign Out
                                    </OpenModalBtn>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = ({ user }) => ({
    isToken: user && user.token
})

const mapDispatchToProps = {
    addToast, closeModal, logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
