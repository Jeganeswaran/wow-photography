import React from 'react'
import SponsorSection from '../landing/sponsorsection';

const SponsorLayout = ({image, title, children}) => {
    return (
        <div>
            {
                title &&
                <>
                    <div className="static-content-header collage-bg"
                         style={{backgroundImage: image ? `url(${image})` : undefined}}/>
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
