import React from 'react'
import BannerVid from '../../assets/video/banner_2023.mp4'

const Banner = () => {
    return (
        <video className="banner-video" autoPlay loop muted playsInline src={BannerVid}>
            <source
                src={BannerVid}
                type="video/mp4"/>
        </video>
    )
}

export default Banner
