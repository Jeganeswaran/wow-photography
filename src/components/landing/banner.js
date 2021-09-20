import React from 'react'
import BannerVid from '../../assets/video/banner.mp4'

const Banner = () => {
    return (
        <video className="banner-video" autoPlay loop muted>
            <source
                src={BannerVid}
                type="video/mp4"/>
        </video>
    )
}

export default Banner
