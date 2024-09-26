import React from "react";
import GrandWinnerImg from "../../assets/img/prize/2023-WOW-Grand-Winner.png";
import CreativeEyeImg from "../../assets/img/prize/2023-WOW-Creative-Eye.png";
import DigiArt from "../../assets/img/prize/2023-WOW-DigitalArt.png";
import Best100Img from "../../assets/img/prize/2023-WOW-100.png";
import EnterBtn from "./EnterBtn";

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
            title="Grand Prize"
            notes="For the most creative minds, we have something truly exceptional. Four Grand Winners (three from Photography & Videography and one from Digital Art) will embark on an unforgettable, all-expenses-paid journey to the world's most photographed monument, the iconic Eiffel Tower in Paris, France."
            desc={[
              "8 winners to international trips",
            ]}
          />
          <Prize
            src={CreativeEyeImg}
            title="Creative Eye"
            notes="(The top 12 Creative Eye Award Winners will embark on a special two-day photography workshop hosted by the prestigious Light and Life Academy. Here, you'll have the chance to enhance your skills and gain invaluable insights from one of the most esteemed institutions in the field. But that's not all - at the end of the workshop, participants will compete for the coveted Grand Winner Title. The top three winners will also earn the opportunity to jet off on a thrilling trip to the City of Light, Paris, France.)"
            desc={[
              "exclusive photo Exchahge",
            ]}
          />
          <Prize
            src={Best100Img}
            title="Best of 100"
            notes="All participants who make their mark will receive well-deserved WOW TN 2024 BEST 100 Photo- Participation Certificates, recognizing your exceptional contribution to the art."
            desc={["Certificates + Awards"]}
          />

          <Prize
            src={DigiArt}
            title="Digital art"
            notes="Our new Digital Art segment brings its own set of rewards:<br/>
            Best WOW TN DIGI-ARTIST 2024: 1 Grand Winner will earn a remarkable trip to France.<br/>
            Best 10 Creative Artist 2024: Surprise Prize + Certificate & Art Display in Gallery.<br/>
            Best 100 Digital Art: Certificates & Digital Gallery in the official website.<br/>
            "
            desc={[
              "1 Grand Winner to Paris France + Certificate + Award",
              "10 Creative Artist - Surprise Gift + Award + Certificate + Digi Art Virtual Gallery",
              "100 Best Digital Art  - Certificates + Virtual Galley",
            ]}
          />
        </div>
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
