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
      title: "Arts & Culture",
      image: CultureImg,
    },
    {
      title: "Heritage Tourism",
      image: HERITAGEImg,
    },
    {
      title: "Joy of Celebrations",
      image: JoyofCelebrationsImg,
    },
    {
      title: "Tastes of Tamil Nadu",
      image: TastebudsImg,
    },
    {
      title: "Smiles of Tamil Nadu",
      image: NaturesMiracleImg,
    },
    {
      title: "Nature's Miracle",
      image: NatureMiracle,
    },
    {
      title: "Wild in focus",
      image: PH2OTOSImg,
    },
    {
      title: "Wanderlust",
      image: AnimalKingdom,
    },
    {
      title: "Tamil Nadu in Bird's Eye view",
      image: FITographyImg,
    },
  ];
  const [slide, setSlideIndex] = useState(0);

  return (
    <section className="post-section">
      <div className="text-center mb-4">
        <h1 className="f-700" style={{ color: `rgba(0, 0, 0, 0.6)` }}>
        Categories for Photography & Digi-Art - WOW TAMILNADU 2024
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
            Video Categories for WOW TAMILNADU 2024
          </h1>
        </div>
        <div className="row">
          <Prize
            src={ReelsImg}
            
            title="WOW TN Reels"
            rulesTitle="Rules for Reels"
            rules={[
              "Duration 30 seconds to 1 minute.",
              "Instagram reels are viewed in a vertical orientation, videos should be 1080 pixels wide and 1920 pixels height.",
              "Reels are open content and it should be reflecting travel and tourism shot in  districts of Tamil Nadu.",
              "Accepted reels format is Mov or MP4.",
              "Strictly avoid using watermarks in Reels.",
              "Music should be royalty free or you can use our music tracks  available below.",
            ]}
          />
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
