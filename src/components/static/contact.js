import React from 'react'
import SponsorLayout from '../common/sponsorlayout';
import ContactUs from '../auth/ContactUs';
import Logo from '../common/logo';
import { SocialLinks } from '../common/footer';

const Contact = () => {
    return (
        <div>
            <SponsorLayout  title="Contact">
                <div className="row mt-5">
                    <div className="col-md-6 flex-center flex-column mb-3">
                        <Logo className="prize-img" />
                        <SocialLinks className="menu-list mt-3" />
                    </div>
                    <div className="col-md-6">
                        <ContactUs />
                    </div>
                </div>
            </SponsorLayout>
        </div>
    )
}

export default Contact