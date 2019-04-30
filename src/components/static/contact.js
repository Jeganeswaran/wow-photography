import React from 'react'
import SponsorLayout from '../common/sponsorlayout';
import ContactUs from '../auth/ContactUs';
import Logo from '../common/logo';

const Contact = () => {
    return (
        <div>
            <div className="static-content-header flex-center">
                <div className="container">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <SponsorLayout>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <Logo className="w-100 mb-4" />
                    </div>
                    <div className="col-md-8">
                        <ContactUs />
                    </div>
                </div>
            </SponsorLayout>
        </div>
    )
}

export default Contact