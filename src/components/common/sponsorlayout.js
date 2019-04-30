import React from 'react'
import SponsorSection from '../landing/sponsorsection';

const SponsorLayout = ({children}) => {
    return (
        <div>
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
