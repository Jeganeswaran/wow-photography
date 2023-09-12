import React from "react";
import Banner from "./banner";
import { connect } from "react-redux";
import useHttp from "../../hooks/http/useHttp";
import { LANDING, landing_url } from "../../redux/actions/constants";
import WowPics from "./WowPics";
import WowWinners from "./WowWinners";
import PrizeSection from "./prizesection";
import SponsorSection from "./sponsorsection";
import EnterBtn from "./EnterBtn";
import TNTour from "../../assets/img/tn-tour.jpeg";
import { PhotoCategories, VideoCategories } from "./categories";

const LandingPage = ({ dispatch }) => {
  useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

  return (
    <div>
      <Banner />
      <section className="post-section">
        <div className="container">
          <div className="text-center mb-5">
            <h3
              className="f-700 mb-2"
              style={{ color: `rgba(0, 0, 0, 0.6)`, fontSize: `52px` }}
            >
              Photography, Video &amp; Reels Contest
            </h3>
            <h6>Theme: Tourist Experiences/Destinations of Tamil Nadu</h6>
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <p
                className="sourcesans f-15 text-justify"
                style={{ color: `rgba(0, 0, 0, 0.4)`, lineHeight: 1.8 }}
              >
                Everything is faded like rain clouds, but Photography is left
                like Earth. Documenting the rich antiquity of our soil that
                surrounds us shall be the main notion when it comes to
                impressing the world with the glory of our tourism. To excavate
                the lost grandeur during this chaotic situation, a journey down
                the historical lane of Tamil Nadu is much needed. Get ready with
                your cameras to show the world the real glory of the soil.
                <br />
                <br />
                Join us in creating a new history!
                <br />. If you want to rise up to the top of your game and raise
                your flag of victory, all you need to do is to be a Professional
                or Amateur who can participate in this splendid search festival
                from September 27th 2022 till December 25th 2022.
              </p>
              <div className="flex-center pt-3">
              <img 
              style={{width:"250px"}}
                className="category-img"
                alt={"cat.title"}
                src={TNTour}
              /></div>
              <div className="flex-center pt-3">
                <EnterBtn className="btn pl-5 pr-5 btn-info disable" />
              </div>
              <div className="sourcesans f-15 pt-1 theme-red text-center">
                *Registration Closed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PrizeSection /> */}
      <WowWinners />
      <PhotoCategories />
      <hr />
      {/* <VideoCategories /> */}
      <WowPics />
      <SponsorSection />
    </div>
  );
};

const mapStateToProps = ({ landing_page }) => ({
  wow_pick: landing_page.data.wow_pick || [],
  fetching: landing_page.fetching,
});

export default connect(mapStateToProps)(LandingPage);
