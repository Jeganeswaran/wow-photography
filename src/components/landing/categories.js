import React, { useState } from 'react'
import NaturesMiracleImg from '../../assets/img/categories/photo/2021-Natures-Miracle.jpg'
import JoyofCelebrationsImg from '../../assets/img/categories/photo/2021-Joy-of-Celebration.jpg'
import FITographyImg from '../../assets/img/categories/photo/2021-FITography.jpg'
import PH2OTOSImg from '../../assets/img/categories/photo/2021-PH2OTOS.jpg'
import TastebudsImg from '../../assets/img/categories/photo/2021-Taste-buds.jpg'
import PlacesWORSHIPImg from '../../assets/img/categories/photo/2021-Places-WORSHIP.jpg'
import WanderlustImg from '../../assets/img/categories/photo/2021-Wanderlust.jpg'
import Tastebuds from '../../assets/img/categories/Tastebuds.jpg'
import AnimalKingdom from '../../assets/img/categories/photo/2021-Animal-Kingdom.jpg'
import LifeStyle from '../../assets/img/categories/LifeStyle.jpg'
import Carousel from 'nuka-carousel'

const cats = [
  {
    title: 'Nature’s Miracle',
    image: NaturesMiracleImg,
    tags: ['Scenery', 'Mountains', 'Rain', 'Sunrise', 'Sunset'],
  },
  {
    title: 'Joy of Celebrations',
    image: JoyofCelebrationsImg,
    tags: ['Festivals', 'Fairs', 'Celebrations', 'Events'],
  },
  {
    title: 'FITography',
    image: FITographyImg,
    tags: ['Wellness', 'Yoga', 'Cycling', 'Sports etc.,'],
  },
  {
    title: 'pH2Otos',
    image: PH2OTOSImg,
    tags: ['Beaches', 'Lake', 'River', 'Ponds', 'Water Falls'],
  },
  {
    title: 'Taste Buds',
    image: TastebudsImg,
    tags: [
      'Food of Tamil Nadu',
      'Traditional Food',
      'Village Food',
      'Street Food',
    ],
  },
  {
    title: 'Places of Worship',
    image: PlacesWORSHIPImg,
    tags: ['Temples', 'Mosque', 'Churches', 'Shrines'],
  },
  {
    title: 'Wanderlust',
    image: WanderlustImg,
    tags: ['Travel', 'Air', 'Water', 'Land Adventures'],
  },
  {
    title: 'Heritage',
    image: Tastebuds,
    tags: ['Art', 'Culture', 'Heritage'],
  },
  {
    title: 'Animal kingdom',
    image: AnimalKingdom,
    tags: ['Wildlife', 'Birds'],
  },
  {
    title: 'Smiles of Tamil Nadu',
    image: LifeStyle,
    tags: [],
  },
]

const Categories = () => {
  const [slide, setSlideIndex] = useState(0)

  return (
    <section className="post-section">
      <div className="text-center mb-4">
        <h1 className="f-700" style={{ color: `rgba(0, 0, 0, 0.6)` }}>
          Photography Categories for WOW TAMILNADU 2021
        </h1>
      </div>
      <div className="container d-flex justify-content-md-center justify-content-center flex-wrap mb-2">
        <CatTop setSlideIndex={setSlideIndex} />
      </div>
      <Carousel
        autoplay
        wrapAround
        slideIndex={slide}
        afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
        withoutControls
      >
        {cats.map((cat, index) => (
          <div
            style={{ backgroundImage: `url(${cat.image})` }}
            className="category-img"
            key={'cats' + index}
          ></div>
        ))}
      </Carousel>
    </section>
  )
}

export const CatTop = ({ setSlideIndex }) =>
  cats.map((cat, index) => (
    <button
      onClick={() => setSlideIndex(index)}
      className="btn btn-theme btn-category mb-3 mr-3"
      key={index}
    >
      {cat.title.toUpperCase()}
    </button>
  ))

export default Categories
