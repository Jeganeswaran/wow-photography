import React from "react";
// import CountDown from './CountDown';
// import EnterBtn from './EnterBtn';

const Banner = () => {
    return (
        <div className="banner banner-bg">
            <div className="banner-tint flex-center">
                <div className="banner-text p-4">
                    <p className="mb-1 f-18 montserrat">
                        WOW PHOTO AWARDS 2019
                    </p>
                    <h2 className="f-700 montserrat">SHORTLISTED 100 WOW CLICKS 2019</h2>
                    {/* <h4>FOCUSING WORLD TOURISM</h4>
                    <CountDown /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
