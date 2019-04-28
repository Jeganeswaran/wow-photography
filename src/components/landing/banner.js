import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { OpenModalBtn } from "../modals/modalbtns"

const Banner = ({ isToken }) => {
    return (
        <div className="banner banner-bg">
            <div className="banner-tint flex-center">
                <div className="banner-text p-4">
                    <h1 className="f-700">
                        THE ULTIMATE <br></br>
                        PHOTOGRAPHY CONTEST
                    </h1>
                    <h3>FOCUSING WORLD TOURISM</h3>
                    {
                        isToken ?
                        <Link to="/my-collection/enter-to-contest" className="btn pl-4 pr-4 btn-outline-light mt-4">
                            Enter Now
                        </Link> :
                        <OpenModalBtn 
                            modalName="SIGNIN_MODAL"
                            className="btn pl-4 pr-4 btn-outline-light mt-4"
                        >
                            Enter Now
                        </OpenModalBtn>
                    }
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({ user }) => ({
    isToken: user && user.token
})

export default connect(mapStateToProps)(Banner)
