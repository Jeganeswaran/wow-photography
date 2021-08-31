import React from 'react'
import CountDown from './CountDown';
// import EnterBtn from './EnterBtn';

const Banner = () => {
    return (
        <div className="banner banner-bg">
            <div className="banner-tint flex-center">
                <div className="banner-text p-4">
                    <h1 className="f-700">
                        THE ULTIMATE <br></br>
                        PHOTOGRAPHY CONTEST
                    </h1>
                    <h4>FOCUSING WORLD TOURISM</h4>
                    <CountDown />
                </div>
            </div>
        </div>
    )
}

export default Banner
