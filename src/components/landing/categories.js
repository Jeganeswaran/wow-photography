import React, { useState } from 'react'
import PlacesWORSHIPImg from '../../assets/img/categories/photo/2021-Places-WORSHIP.jpg'
import CultureImg from '../../assets/img/categories/photo/2021--Culture.jpg'
import HERITAGEImg from '../../assets/img/categories/photo/2021-HERITAGE.jpg'
import JoyofCelebrationsImg from '../../assets/img/categories/photo/2021-Joy-of-Celebration.jpg'
import NaturesMiracleImg from '../../assets/img/categories/photo/2021-Natures-Miracle.jpg'
import TastebudsImg from '../../assets/img/categories/photo/2021-Taste-buds.jpg'
import PH2OTOSImg from '../../assets/img/categories/photo/2021-PH2OTOS.jpg'
import AnimalKingdom from '../../assets/img/categories/photo/2021-Animal-Kingdom.jpg'
import FITographyImg from '../../assets/img/categories/photo/2021-FITography.jpg'
import WanderlustImg from '../../assets/img/categories/photo/2021-Wanderlust.jpg'
import undiscoveredImg from '../../assets/img/categories/photo/2021-undiscovered.jpg'
import SMILESImg from '../../assets/img/categories/photo/2021-SMILES.jpg'
// import VideoImg from '../../assets/img/categories/video/2021--VIDEO.jpg'
import Carousel from 'nuka-carousel'
import EnterBtn from './EnterBtn'

export const PhotoCategories = () => {
  const cats = [
    {
      title: 'Places of Worship',
      image: PlacesWORSHIPImg,
    },
    {
      title: 'Arts & Culture',
      image: CultureImg,
    },
    {
      title: 'Heritage Tourism',
      image: HERITAGEImg,
    },
    {
      title: 'Joy of Celebrations',
      image: JoyofCelebrationsImg,
    },
    {
      title: 'Tastes of Tamil Nadu',
      image: TastebudsImg,
    },
    {
      title: 'Nature’s Miracle',
      image: NaturesMiracleImg,
    },
    {
      title: 'pH2Otos',
      image: PH2OTOSImg,
    },
    {
      title: 'Wildlife',
      image: AnimalKingdom,
    },
    {
      title: 'FITography',
      image: FITographyImg,
    },
    {
      title: 'Wanderlust',
      image: WanderlustImg,
    },
    {
      title: 'Undiscovered TN',
      image: undiscoveredImg,
    },
    {
      title: 'Smiles of Tamil Nadu',
      image: SMILESImg,
    },
  ]
  const [slide, setSlideIndex] = useState(0)

  return (
    <section className="post-section">
      <div className="text-center mb-4">
        <h1 className="f-700" style={{ color: `rgba(0, 0, 0, 0.6)` }}>
          Photography &amp; Video Categories for WOW TAMILNADU 2021
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
            key={'cats' + index}
            className="category-img"
            alt={cat.title}
            src={cat.image}
          />
        ))}
      </Carousel>
      {/*<div className="flex-center pt-3">*/}
      {/*  <EnterBtn className="btn pl-5 pr-5 btn-info" />*/}
      {/*</div>*/}
    </section>
  )
}

// export const VideoCategories = () => {
//     return (
//         <section className="post-section">
//             <div className="text-center mb-4">
//                 <h1 className="f-700" style={{color: `rgba(0, 0, 0, 0.6)`}}>
//                     Videography Categories for WOW TAMILNADU 2021
//                 </h1>
//             </div>
//             <img className="category-img" alt='Videography' src={VideoImg}/>
//             <div className="flex-center pt-3">
//                 <EnterBtn className="btn pl-5 pr-5 btn-info"/>
//             </div>
//         </section>
//     )
// }

export const CatTop = ({ cats, setSlideIndex }) =>
  cats.map((cat, index) => (
    <button
      onClick={() => setSlideIndex(index)}
      className="btn btn-theme btn-category mb-3 mr-3"
      key={index}
    >
      {cat.title.toUpperCase()}
    </button>
  ))
