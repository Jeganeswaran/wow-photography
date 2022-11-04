import React from 'react'
import GrandWinnerImg from '../../assets/img/prize/2022-WOW-Grand-Winner.png'
import CreativeEyeImg from '../../assets/img/prize/2022-WOW-Creative-Eye.png'
import ExplorerImg from '../../assets/img/prize/2022-WOW-Explorer.png'
import Best100Img from '../../assets/img/prize/2022-WOW-100.png'
import EnterBtn from './EnterBtn'

const PrizeSection = () => {
  return (
    <section className="post-section bg-light-grey">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat f-700 theme-red">
          WOW TAMIL NADU 2022
          </h2>
          <p className="poppins">
          (Rewards & Prizes)
          </p>
        </div>
        <div className="row">
          <Prize
            src={GrandWinnerImg}
            title="WoW TN  12 Grand winners"
            desc={[
              'International Travel experience',
              '+ Trophy 🏆 + Certificate',
            ]}
          />
          <Prize
            src={CreativeEyeImg}
            title="Wow TN Creative Eye"
            desc={[
              '12 winners - Hot Air Balloon experience',
              '+ Trophy 🏆 + Certificate.',
            ]}
          />
          <Prize
            src={ExplorerImg}
            title="Explorer awards"
            desc={[
              '76 winners',
              '38 photos and 38 Travel guide videos',
              'from each district',
              'Surprise Gift + Trophy 🏆 + Certificate',

            ]}
          />
          <Prize
            src={Best100Img}
            title="100 WOW 2022"
            desc={['Photo display + Trophies 🏆 + certificates']}
          />
        </div>
      </div>
      <div className="flex-center pt-3">
        <EnterBtn className="btn pl-5 pr-5 btn-info" />
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
