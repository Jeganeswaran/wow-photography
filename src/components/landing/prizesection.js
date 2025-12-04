import React from "react";
import GrandWinnerImg from "../../assets/img/prize/2025-WOW-Grand-Winner.png";
import CreativeEyeImg from "../../assets/img/prize/2025-WOW-Creative-Eye.png";
import DigiArt from "../../assets/img/prize/2023-WOW-DigitalArt.png";
import Best100Img from "../../assets/img/prize/2025-WOW-100.png";
import EnterBtn from "./EnterBtn";
import TNTour from "../../assets/img/tn-tour.jpeg";

const PrizeSection = () => {
  return (
    <section className="post-section bg-light-grey">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat f-700 theme-red">Rewards and Prizes</h2>
          <p className="poppins">
            (We understand the dedication and effort you put into your creative
            works. That's why we've lined up some extraordinary rewards:)
          </p>
        </div>
        <div className="row">
          <Prize
            src={GrandWinnerImg}
            title="Grand Winners – A Reward for the Most Creative Minds"
            notes="For the most outstanding talents, we have something truly extraordinary. SIX Grand Winners (4 from Photography and 2 from Travel Influencer Videography) will be selected for this prestigious honor. These winners will receive an all-expenses-paid international trip to International Trip, a breathtaking destination, as part of an exclusive tourism photography experience, along with many other exciting prizes. Don’t miss out—submit your entries now!"
            // desc={["8 winners to international trips"]}
          />
          <Prize
            src={CreativeEyeImg}
            title="Creative Eye Award Winners – A Journey of Learning and Adventure"
            notes="The top 16 Creative Eye Award winners receive Special Award Trophy. Also their Photos will be Presented in official Tourism Pages and Chance to get on the images on the official Calanders .  But don’t miss to win the top SIX winners will also earn the opportunity to embark on an exciting trip to the stunning International destination ."
            // desc={["exclusive photo Exchahge"]}
          />
          <Prize
            src={Best100Img}
            title="WOW TAMIL NADU BEST 100 "
            notes="All participants who make their mark will receive well-deserved  BEST 100 Photo- Participation Certificates, recognizing your exceptional contribution to the art. Also the same will be displayed in Social Media Pages."
            // desc={["Certificates + Awards"]}
          />

          {/* <Prize
            src={DigiArt}
            title="Digital art"
            notes="Our new Digital Art segment brings its own set of rewards:<br/>
            Best WOW TN DIGI-ARTIST 2025: 1 Grand Winner will earn a remarkable trip to France.<br/>
            Best 10 Creative Artist 2025: Surprise Prize + Certificate & Art Display in Gallery.<br/>
            Best 100 Digital Art: Certificates & Digital Gallery in the official website.<br/>
            "
            desc={[
              "1 Grand Winner to Paris France + Certificate + Award",
              "10 Creative Artist - Surprise Gift + Award + Certificate + Digi Art Virtual Gallery",
              "100 Best Digital Art  - Certificates + Virtual Galley",
            ]}
          /> */}
        </div>
      </div>
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

    </section>
  );
};

const Prize = ({ src = null, title = "", notes = "", desc = [] }) => (
  <div className="col-md-12 mb-3">
    <div className="row flex-center">
      <div className="col-md-4">
        <div>
          <img src={src} className="w-100 prize-img" alt={title} />
        </div>
      </div>
      <div className="col-md-8">
        <h5 className="montserrat f-600 text-center text-md-left">{title}</h5>
        <ul className="f-14 m-0 p-0 list-unstyled text-center text-md-left poppins mb-3">
          {desc.map((x, index) => (
            <li className="mb-1" key={title + index}>
              {x}
            </li>
          ))}
        </ul>
        {notes && (
          <div
            className="f-13 text-muted poppins f-500"
            dangerouslySetInnerHTML={{ __html: notes }}
          ></div>
        )}
      </div>
    </div>
  </div>
);

export default PrizeSection;
