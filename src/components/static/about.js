import React from "react";
import EnterBtn from "../landing/EnterBtn";
import SponsorLayout from "../common/sponsorlayout";
// import Pagelayout from '../common/pagelayout';

const About = () => {
  return (
    <div>
      <SponsorLayout title="About">
        <p>
          WoW Tamil Nadu is Nation’s one and only photo & video contest on
          tourism aims to connect thousands of visual creators to a platform in
          a community with photography tools to help them explore and grow their
          craft and redefine the Beauty of Tamil Nadu. This WoW Tamil Nadu is
          the third edition in a row organised by Global Media Box in
          association with the Department of Tourism Tamil Nadu.
          
          <br />
          Everything is faded like rain clouds, but Photography is left like
          Earth. Documenting the rich antiquity of our soil that surrounds us
          shall be the main notion when it comes to impressing the world with
          the glory of our tourism. To excavate the lost grandeur during this
          chaotic situation, a journey down the historical lane of Tamil Nadu is
          much needed. Get ready with your cameras to show the world the real
          glory of the soil. If you want to rise up to the top of your game and
          raise your flag of victory, all you need to do is to be a Professional
          or Amateur who can participate in this splendid search festival from
          September 27th 2025 till December 25th 2025.
        </p>
        <div className="flex-center pt-3 pb-3">
          <EnterBtn className="btn pl-5 pr-5 btn-theme" />
        </div>
      </SponsorLayout>
    </div>
  );
};

export default About;
