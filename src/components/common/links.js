import React from 'react'
import { NavLink } from "react-router-dom"
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import Logout from './logout';

const Links = ({ isToken }) => {
    return (
        <>
            <li>
                <NavLink exact activeClassName="theme-red" to="/">
                    Home
                </NavLink>
            </li>
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
                        <NavLink activeClassName="theme-red" to="/my-profile">
                            My Profile
                        </NavLink>
                    </li>
                </>
            }
            <li>
                <NavLink activeClassName="theme-red" to="/about-us">
                    About
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
                    Contact
                </NavLink>
            </li>
            {
                isToken &&
                <>
                    <li>
                        <Logout />
                    </li>
                </>
            }
        </>
    )
}

const mapStateToProps = ({ user }) => ({
    isToken: user && user.token
})

export const SignInOut = connect(mapStateToProps)(({ isToken }) => {
    if (isToken) {
        return <Logout className="btn-a f-14 float-right" />
    }
    return (
        <OpenModalBtn
            className="btn-a f-14 float-right"
            modalName="SIGNUP_MODAL"
        >
            Sign Up
        </OpenModalBtn>
    )
})

export const HamBtn = () => (
    <OpenModalBtn
        className="btn-a"
        modalName="SIDE_MODAL"
    >
        <span className="navbar-toggler-icon" />
    </OpenModalBtn>
)

export default connect(mapStateToProps)(Links)