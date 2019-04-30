import React from 'react'
import SponsorSection from '../landing/sponsorsection';

const SponsorLayout = ({title, children}) => {
    return (
        <div>
            {title && <div className="static-content-header collage-bg">
                <div className="flex-center banner-tint">
                    <h1>{title}</h1>
                </div>
            </div> }
            <div className="container static-content">
                {children}
            </div>
            <div className="pt-5">
                <SponsorSection />
            </div>
        </div>
        
    )
}

export default SponsorLayout
