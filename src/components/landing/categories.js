import React, { useState } from 'react'
import EnterBtn from './EnterBtn'
import WorldofSmiles from '../../assets/img/categories/WorldofSmiles.jpg'
import BirdsEyeView from '../../assets/img/categories/BirdsEyeView.jpg'
import creativeImg from '../../assets/img/categories/CreativeinFocus.jpg'
import actionImg from '../../assets/img/categories/Actionnmotion.jpg'
import JoyofCelebration from '../../assets/img/categories/JoyofCelebration.jpg'
import NaturesMiracle from '../../assets/img/categories/NaturesMiracle.jpg'
import Wanderlust from '../../assets/img/categories/Wanderlust.jpg'
import Tastebuds from '../../assets/img/categories/Tastebuds.jpg'
import AnimalKingdom from '../../assets/img/categories/AnimalKingdom.jpg'
import LifeStyle from '../../assets/img/categories/LifeStyle.jpg'
import Carousel from 'nuka-carousel'

const cats = [
  {
    title: 'Nature’s Miracle',
    image: WorldofSmiles,
    tags: ['Scenery', 'Mountains', 'Rain', 'Sunrise', 'Sunset'],
  },
  {
    title: 'Joy of Celebrations',
    image: BirdsEyeView,
    tags: ['Festivals', 'Fairs', 'Celebrations', 'Events'],
  },
  {
    title: 'FITography',
    image: creativeImg,
    tags: ['Wellness', 'Yoga', 'Cycling', 'Sports etc.,'],
  },
  {
    title: 'pH2Otos',
    image: actionImg,
    tags: ['Beaches', 'Lake', 'River', 'Ponds', 'Water Falls'],
  },
  {
    title: 'Taste Buds',
    image: JoyofCelebration,
    tags: [
      'Food of Tamil Nadu',
      'Traditional Food',
      'Village Food',
      'Street Food',
    ],
  },
  {
    title: 'Places of Worship',
    image: NaturesMiracle,
    tags: ['Temples', 'Mosque', 'Churches', 'Shrines'],
  },
  {
    title: 'Wanderlust',
    image: Wanderlust,
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
          >
            <div className="category-title">
              <h2 className="category-head text-center">
                {cat.title.toUpperCase()}
              </h2>
              <div className="category-content sourcesans text-center">
                {cat.tags.map((x, index) => (
                  <span key={index}>
                    {' '}
                    {x} {cat.tags.length !== index + 1 && ' | '}
                  </span>
                ))}
              </div>
              <EnterBtn className="btn category-btn f-14 mt-4 f-600 montserrat pl-4 pr-4" />
            </div>
          </div>
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
