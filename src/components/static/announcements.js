import React from 'react'
import SponsorLayout from '../common/sponsorlayout'
import FbPage from './FbPage'
import Loader from "../common/loader";

const About = () => {
    return (
        <div>
            <SponsorLayout title="Announcements">
                <div className="row">
                    <div className="col-sm-8 mb-3">
                        <ul className="f-16 f-600 annoucelist">
                            <li>Entries starts from 27th September 2021</li>
                            <li>Submission Deadline 31st December 2021</li>
                            <li>Winners Announcement on 15th Jan 2022</li>
                            <li>WOW Tamil Nadu Team will contact the winners only via email / Mobile numbers that are used during registration. </li>
                            <li>Announcements will be made on our official website and Social Media handles.</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <FbPage>
                            <div className="flex-center p-3">
                                <Loader width="50px" height="50px" />
                            </div>
                        </FbPage>
                    </div>
                </div>
            </SponsorLayout>
        </div>
    )
}

export default About
