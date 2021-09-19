import React from 'react'
import SponsorLayout from '../common/sponsorlayout'
import FbPage from './FbPage'

const About = () => {
  return (
    <div>
      <SponsorLayout title="Announcements">
        <div className="row">
          <div className="col-sm-8 mb-3">
            <ul className="f-16 f-600 annoucelist">
              <li>Submission Deadline 1st September 2021</li>
              <li>
                100 Best WOW Photo 2021 will be Announced on 15th September 2021
              </li>
              <li>
                Public Display of Best 100 WOW Photos 2021 - Photo Gallery on
                27th -29th September for World Tourism Day
              </li>
              <li>
                6 Winners of WOW Explore Awards 2021 (International Trip on
                Photo Challenge) will be announced on 28th Sept 2021
              </li>
              <li>
                WOW PHOTO of The Year 2021 will be announced after completion of
                Photo Challenge in Dec 2021.
              </li>
              <li>
                WOW Photo Awards Team will contact the winners only via email at
                their registered email addresses.
              </li>
              <li>
                Also it will be announced on our official website and Social
                Media .
              </li>
            </ul>
          </div>
          <div className="col-sm-4 mb-3">
            <FbPage>
              <a href="https://www.facebook.com/wowtamilnadu/">
                WOW PHOTO Awards
              </a>
            </FbPage>
          </div>
        </div>
      </SponsorLayout>
    </div>
  )
}

export default About
