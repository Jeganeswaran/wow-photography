import React from 'react'
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-tint flex-center">
                <div className="banner-text p-4">
                    <h1 className="f-700">
                        THE ULTIMATE <br></br>
                        PHOTOGRAPHY CONTEST
                    </h1>
                    <p>Nulla minus expedita soluta facere ex molestias sed, tempora nam repellendus, odit corporis enim libero? Architecto!</p>
                    <Link to="my-collection/enter-to-contest" className="btn btn-outline-light mt-3">
                        Enter to Contest
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
