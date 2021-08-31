import React from 'react'
import Sponsors from './sponsors';

const SponsorSection = () => {
    return (
        <section className="pt-3 pb-3 border-top">
            <div className="container">
                <div className="text-center mb-4">
                    <h4 className="montserrat f-700 theme-red">PARTNERS</h4>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Sponsors />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SponsorSection
