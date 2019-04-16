import React, { Fragment } from 'react'
import Logo from './logo';
import { Link } from "react-router-dom"
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import { logout_url } from '../../redux/actions/constants';
import { closeModal, addToast } from '../../redux/actions/common';
import { clearUser } from '../../redux/actions/user';

const Header = ({ isToken, closeModal, addToast, clearUser  }) => {
    return (
        <header className="header">
            <div className="flex-between header-height">
                <div className="logo-holder">
                    <Link to="/" className="d-block">
                        <Logo className="logo" />
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="menu-list">
                        <li>About Us</li>
                        <li>Faq</li>
                        <li>Contact Us</li>
                        {!isToken ?
                            <Fragment>
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
                                    <OpenModalBtn
                                        modalName="SIGNIN_MODAL"
                                        className="btn btn-theme btn-rounded"
                                    >
                                        <i className="fas fa-plus-circle mr-1"></i> Create a post
                                    </OpenModalBtn>
                                </li>
                            </Fragment> :
                            <Fragment>
                                <li>
                                    <Link to="/purchase-plan">
                                        Purchase plan
                                    </Link>
                                </li>
                                <li>
                                    <OpenModalBtn
                                        className="btn-a font-weight-bold f-14"
                                        modalName="LOADING_MODAL"
                                        modalProps={{
                                            config: {
                                                url: logout_url,
                                                method: "DELETE"
                                            },
                                            succFunc(data){
                                                closeModal()
                                                clearUser()
                                            },
                                            errFunc(data){
                                                addToast(data, false)
                                                closeModal()
                                            }
                                        }}
                                    >
                                        Sign Out
                                    </OpenModalBtn>
                                </li>
                                <li>
                                    <Link className="btn btn-theme btn-rounded" to="/my-collection/private-photographs">
                                        <i className="fas fa-plus-circle mr-1"></i> Create a post
                                    </Link>
                                </li>
                            </Fragment>
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
    addToast, closeModal, clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
