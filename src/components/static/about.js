import React from 'react'
import EnterBtn from '../landing/EnterBtn'
import SponsorLayout from '../common/sponsorlayout'
// import Pagelayout from '../common/pagelayout';

const About = () => {
  return (
    <div>
      <SponsorLayout title="About">
        <p>
          Everything is faded like rain cloud, but Photography is left like
          Earth. Documenting the rich antiquity of our soil that surrounds us
          shall be the main notion when it comes to impress the world with the
          glory of our tourism. To excavate the lost grandeur during this
          chaotic situation, a journey down the historical lane of Tamil Nadu is
          much needed. Get ready with your cameras to show the world the real
          glory of the soil. Wow Tamil Nadu Tourism Photo and Video festival
          joins hands with Tamil Nadu Tourism to be a part of the historic
          journey of rejuvenation with gifts and compliments.
          <br />
          <br />
          Join us in creating a new history!
          <br />
          If you want to rise up to the top of your game and raise your flag of
          victory, all you need to do is to be a Professional or Amateur who can
          participate in this splendid search festival from September 27th 2021
          till December 31st 2021.
        </p>
        <div className="flex-center pt-3 pb-3">
          <EnterBtn className="btn pl-5 pr-5 btn-theme" />
        </div>
      </SponsorLayout>
    </div>
  )
}

export default About
