import React from 'react'
import SponsorLayout from '../common/sponsorlayout';
import ContactUs from '../auth/ContactUs';
import Logo from '../common/logo';

const Contact = () => {
    return (
        <div>
            <SponsorLayout  title="Contact Us">
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