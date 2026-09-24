import React, { useState } from "react";
import PlacesWORSHIPImg from "../../assets/img/categories/photo/Places of Worship.jpg";
import CultureImg from "../../assets/img/categories/photo/Arts & Culture.jpg";
import HERITAGEImg from "../../assets/img/categories/photo/Heritage Tourism.jpg";
import JoyofCelebrationsImg from "../../assets/img/categories/photo/Joy of Celebrations.jpg";
import NaturesMiracleImg from "../../assets/img/categories/photo/Smiles of Tamil Nadu.jpg";
import TastebudsImg from "../../assets/img/categories/photo/Tastes of Tamil Nadu.jpg";
import PH2OTOSImg from "../../assets/img/categories/photo/Wild in focus.jpg";
import AnimalKingdom from "../../assets/img/categories/photo/Wanderlust.jpg";
import FITographyImg from "../../assets/img/categories/photo/TN in Bird's Eye view.jpg";
import NatureMiracle from "../../assets/img/categories/photo/Nature's Miracle.jpg";
import ReelsImg from "../../assets/img/categories/video/WOW2022 reels.png";
import TravelGuideImg from "../../assets/img/categories/video/TravelGuide.png";
import TravelGuideAudio from "../../assets/audio/TN Travel Guide.wav";
import ReelsAudio from "../../assets/audio/WOW TN Reels.mp3";
import Carousel from "nuka-carousel";
import EnterBtn from "./EnterBtn";

export const PhotoCategories = () => {
  const cats = [
    {
      title: "Places of Worship",
      image: PlacesWORSHIPImg,
    },
    {
      title: "Food, Arts & Culture",
      image: HERITAGEImg,
    },
    {
      title: "Heritage Tourism",
      image: NaturesMiracleImg,
    },
    {
      title: "Joy of Celebrations",
      image: CultureImg,
    },
    {
      title: "Smiles of TN",
      image: NaturesMiracleImg,
    },
    {
      title: "Nature & Wildlife",
      image: NatureMiracle,
    },
    
    {
      title: "Play & Learn",
      image: TastebudsImg,
    },
     {
      title: "Bird's Eye View",
      image: TastebudsImg,
    },
  ];
  const [slide, setSlideIndex] = useState(0);

  return (
    <section className="post-section  bg-light-grey">
      <div className="text-center mb-4">
        <h1 className="f-700" style={{ color: `rgba(0, 0, 0, 0.6)` }}>
        Categories for Photography - WOW TAMILNADU 2026
        </h1>
      </div>
      <div className="container d-flex justify-content-md-center justify-content-center flex-wrap mb-2">
        <CatTop cats={cats} setSlideIndex={setSlideIndex} />
      </div>
      <Carousel
        autoplay
        wrapAround
        slideIndex={slide}
        afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
        withoutControls
      >
        {cats.map((cat, index) => (
          <img
            key={"cats" + index}
            className="category-img"
            alt={cat.title}
            src={cat.image}
          />
        ))}
      </Carousel>
      <div className="flex-center pt-3">
        <EnterBtn className="btn pl-5 pr-5 btn-info" />
      </div>
    </section>
  );
};

export const VideoCategories = () => {
  return (
    <section className="post-section bg-light-grey">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="f-700" style={{ color: `rgba(0, 0, 0, 0.6)` }}>
            Video Categories for WOW TAMILNADU 2026
          </h1>
        </div>
        <div className="row justify-content-center">
        <section className="post-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="montserrat f-700 theme-red">
              6th Edition WOW Tamil Nadu Travel Influencer Guidelines:
            </h2>
          </div>
          <ul>
            <li>All videos must be filmed exclusively in Tamil Nadu</li>
            <li>
              Videos should have a duration of at least 30 seconds, with a
              maximum length of 180 seconds.
            </li>
            <li>
              Submissions can be in either Landscape HD or Vertical Reels
              format.
            </li>
            <li>
              The content must focus on travel experiences, travel information,
              or showcasing new locations.
            </li>
          </ul>
        </div>
      </section>
          <Prize src={TravelGuideImg} 
          rulesTitle="Rules for TN Travel Influencer"
           title="TN Travel Influencer" rules={["Duration: Minimums 1 minute to maximum 3 minutes.", "Videos are viewed in a landscape orientation and the quality should be 1080 pixels height and 1920 pixels wide.", "Videos should be shot in the districts of TN", "Video submission will be shortlisted based on the district covered in the video and not the participants area or district.", "Music should be royalty free, you can use your own composition music, voice over, map graphics, text or you can make use of our music tracks available below.", "Strictly avoid using watermarks in videos.", "Accepted video format is Mov or MP4."]} />
        </div>
        <div className="flex-center pt-3">
          <EnterBtn className="btn pl-5 pr-5 btn-info" />
        </div>
        <div className="flex-center pt-3"><a target="_blank" rel="noopener noreferrer" href={TravelGuideAudio} className="btn pl-5 pr-5 btn-info">Download Music Track 1</a></div>
        <div className="flex-center pt-3"><a target="_blank" rel="noopener noreferrer" href={ReelsAudio} className="btn pl-5 pr-5 btn-info">Download Music Track 2</a></div>

      </div>
    </section>
  );
};

const Prize = ({ src = null, title = "",audio=null, desc = [], rules = [], rulesTitle="" }) => (
  <div className="col-md-6 mb-4">
    <div className="row flex-center">
      <div className="col-md-6">
        <div>
          <img
            src={src}
            style={{ maxHeight: "300px" }}
            className="w-100 prize-img"
            alt={title}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h5 className="montserrat f-600 text-center text-md-left">{title}</h5>
        <ul className="f-14 m-0 p-0 list-unstyled text-center text-md-left poppins">
          {desc.map((x, index) => (
            <li className="mb-1" key={title + index}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
    {rules.length > 0 && (
      <div>
        <h6 className="f-600">{rulesTitle}</h6>
        <ul className="f-14 m-0 p-0 pl-3 poppins">
          {rules.map((x, index) => (
            <li className="mb-1" key={title + index}>
              {x}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const CatTop = ({ cats, setSlideIndex }) =>
  cats.map((cat, index) => (
    <button
      onClick={() => setSlideIndex(index)}
      className="btn btn-theme btn-category mb-3 mr-3"
      key={index}
    >
      {cat.title.toUpperCase()}
    </button>
  ));
