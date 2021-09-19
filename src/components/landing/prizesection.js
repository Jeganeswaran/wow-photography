import React from 'react'
import photoOfYear from '../../assets/img/prize/Photo-of-the-year.png'
import besthun from '../../assets/img/prize/100-best.png'
import explorer from '../../assets/img/prize/EXPLORER-AWARDS.png'
import createye from '../../assets/img/prize/Creative-eye-award.png'

const PrizeSection = () => {
  return (
    <section className="post-section bg-light-grey">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat f-700 theme-red">
            WOW TAMIL NADU AWARDS 2021 PRIZES
          </h2>
          <p className="poppins">
            Win upto US $2000 in four different award categories
          </p>
        </div>
        <div className="row">
          <Prize
            src={photoOfYear}
            title="WOW TAMILNADU 2021 - Grand Winner"
            desc={['Car - One Grand Winner', 'Trophy + Certificate']}
          />
          <Prize
            src={createye}
            title="CREATIVE EYE AWARD 2021"
            desc={[
              'Two Winners ( 1 Photo 1 Video)',
              'Electric Scooter each',
              'Trophy + Certificate',
            ]}
          />
          <Prize
            src={explorer}
            title="WOW TAMILNADU EXPLORER AWARD 2021"
            desc={[
              '12 Winners in Photo Categories',
              '2 Winners in Video Categories',
              'Smart Phone + Trophy & Certificate',
            ]}
          />
          <Prize
            src={besthun}
            title="100 WOW PHOTO 2021"
            desc={['Mementos + Certificates']}
          />
        </div>
      </div>
    </section>
  )
}

const Prize = ({ src = null, title = '', desc = [] }) => (
  <div className="col-md-6 mb-4">
    <div className="row flex-center">
      <div className="col-md-4">
        <div>
          <img src={src} className="w-100 prize-img" alt={title} />
        </div>
      </div>
      <div className="col-md-8">
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
  </div>
)

export default PrizeSection
