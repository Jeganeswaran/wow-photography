import React from 'react'
import BannerVid from '../../assets/video/banner_2023.mp4'
import BannerImg from '../../assets/img/banner_2024.jpg'

const Banner = () => {
    return (
        // <video className="banner-video" autoPlay loop muted playsInline src={BannerVid}>
        //     <source
        //         src={BannerVid}
        //         type="video/mp4"/>
        // </video>
        <div>
            <img src={BannerImg} style={{objectFit:"cover"}} width="100%"/>
        </div>
    )
}

export default Banner
