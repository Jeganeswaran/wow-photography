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
import Announcement from "../static/announcement";
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
              style={{ color: `rgba(0, 0, 0, 0.6)`, fontSize: `40px` }}
            >
              Welcome to WOW Tamil Nadu Awards 2024 <br /> The 5th Edition
            </h3>
            <h6>Theme: Tourist Experiences/Destinations of Tamil Nadu</h6>
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <p
                className="sourcesans f-15 text-center"
                style={{ color: `rgba(0, 0, 0, 0.6)`, lineHeight: 1.8 }}
              >
                WOW Tamil Nadu is not just an awards program; it's a celebration
                of artistry, a platform for appreciation, and a community of
                visual creators passionate about capturing the beauty of Tamil
                Nadu. As the nation's one and only art appreciation awards in
                photography and video making contests focused on tourism, we are
                on a mission to connect thousands of talented individuals to a
                platform where they can explore, grow, and share their craft.
                <br />
                <br />
                In 2024, we proudly present the 5th consecutive edition of WOW
                Tamil Nadu Awards, organized by the Department of Tourism, Tamil
                Nadu as part of World Tourism Day every year . This edition
                promises to be even more remarkable as we introduce a brand-new
                segment for Travel Influencers , expanding our horizons and
                making WOW Tamil Nadu a more vibrant and inclusive celebration
                of artistry.
                <br />
                <br />
                Whether you're an aspiring photographer, a seasoned videographer
                pushing the boundaries of creativity, WOW Tamil Nadu Awards 2024
                is your stage. It's a stage to share your vision, celebrate the
                rich heritage and natural beauty of Tamil Nadu, and connect with
                a community of like-minded individuals who share your passion
                for art.
              </p>
              <div className="flex-center pt-3">
                <img
                  style={{ width: "250px" }}
                  className="category-img"
                  alt={"cat.title"}
                  src={TNTour}
                />
              </div>
              <div className="flex-center pt-3">
                <EnterBtn className="btn pl-5 pr-5 btn-info" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrizeSection />
     
      <PhotoCategories />
      <VideoCategories />
      <Announcement />
      {/* <WowWinners /> */}
      <hr />
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
