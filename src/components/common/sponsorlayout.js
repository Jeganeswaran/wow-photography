import React from 'react'
import SponsorSection from '../landing/sponsorsection';

const SponsorLayout = ({children}) => {
    return (
        <div className="container static-content">
            {children}
            <div className="pt-5">
                <SponsorSection />
            </div>
        </div>
    )
}

export default SponsorLayout
