import React from 'react'
import SponsorLayout from '../common/sponsorlayout';
import useScript from '../../hooks/useScript';

const About = () => {

    const [fbloaded] = useScript(
        'https://connect.facebook.net/en_IN/sdk.js#xfbml=1&version=v3.3&appId=685670868535724&autoLogAppEvents=1'
    );

    return (
        <div>
            <SponsorLayout title="Announcements">
                <div className="row">
                    <div className="col-sm-8 mb-3">
                        <ul className="f-16 f-600 annoucelist">
                            <li>Submission Deadline 31 Aug 2019</li>
                            <li>100 Best WOW Photo 2019 will be Announced on 15th September 2019</li>
                            <li>Public Display of Best 100 WOW Photos 2019 - Photo Gallery on 27th -29th September for World Tourism Day</li>
                            <li>6 Winners of WOW Explore Awards 2019 (International Trip on Photo Challenge) will be announced on 28th Sept 2019</li>
                            <li>WOW PHOTO of The Year 2019 will be announced after completion of Photo Challenge in Dec 2019.</li>
                            <li>WOW Photo Awards Team will contact the winners only via email at their registered email addresses.</li>
                            <li>Also it will be announced on our official website and Social Media .</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 mb-3">
                        {
                            fbloaded &&
                            <div className="fb-page" data-href="https://www.facebook.com/wowphotoawards/" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
                                <blockquote cite="https://www.facebook.com/wowphotoawards/" className="fb-xfbml-parse-ignore">
                                    <a href="https://www.facebook.com/wowphotoawards/">WOW PHOTO Awards</a>
                                </blockquote>
                            </div>
                        }
                    </div>
                </div>
            </SponsorLayout>
        </div>
    )
}

export default About
