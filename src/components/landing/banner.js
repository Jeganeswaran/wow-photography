import React from 'react'
import BannerVid from '../../assets/video/banner.mp4'
import CountDown from './CountDown'

const Banner = () => {
    return (
        <div className="banner banner-image">
            <div className="banner-video-container">
                <video autoPlay loop muted>
                    <source
                        src={BannerVid}
                        type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Banner
