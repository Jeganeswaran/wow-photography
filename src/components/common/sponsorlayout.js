import React from 'react'
import HeaderImg from '../../assets/img/wow-tn-about.jpg'
import SponsorSection from '../landing/sponsorsection';

const SponsorLayout = ({image, title, children}) => {
    return (
        <div>
            {
                title &&
                <>
                    <img className="header-img" alt={title} src={image ? image : HeaderImg}/>
                    <div className="text-center mb-4">
                        <h1>{title}</h1>
                    </div>
                </>
            }
            <div className="container static-content">
                {children}
            </div>
            <div className="pt-5">
                <SponsorSection/>
            </div>
        </div>

    )
}

export default SponsorLayout
