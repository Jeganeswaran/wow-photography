import React from 'react'
import GrandWinnerImg from '../../assets/img/prize/2021-WOW-Grand-Winner.png'
import CreativeEyeImg from '../../assets/img/prize/2021-WOW-Creative-Eye.png'
import ExplorerImg from '../../assets/img/prize/2021-WOW-Explorer.png'
import Best100Img from '../../assets/img/prize/2021-WOW-100.png'
import EnterBtn from './EnterBtn'

const PrizeSection = () => {
  return (
    <section className="post-section bg-light-grey">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat f-700 theme-red">
            More Prizes to Encourage Participants
          </h2>
          <p className="poppins">
            JURY SELECTION IS FINAL
          </p>
        </div>
        <div className="row">
          <Prize
            src={GrandWinnerImg}
            title="WOW TAMILNADU 2021 Grand Winner"
            desc={[
              'A Brand new CAR (or) 3 Lakhs Cash Prize ONE winner (One Grand Winner) + Trophy + Certificate',
            ]}
          />
          <Prize
            src={CreativeEyeImg}
            title="WOW Creative EYE Awards (2 Winners)"
            desc={[
              'Rs 50,000 Cash Prize (OR) Equivalent Electric bike ( One for Photography & One for Video) + Trophy + Certificate',
            ]}
          />
          <Prize
            src={ExplorerImg}
            title="Explorer Awards (12+1 Categories)"
            desc={[
              '13 Winners (one per category for Photography)',
              'One Person paid trip in Luxury Cruise Trip  Shared Cabin Valued at Rs.25,000 + Trophy and certificate',
              '13 Special Mention Prize (one per category for Photography)',
              'Rs.5,000 worth of Gifts each and certificate',
              '⠀',
              '5 Winners (BEST 5 Video Entries)',
              'One Person paid trip in Luxury Cruise Trip  Shared Cabin Valued at Rs.25,000 + Trophy and certificate'
            ]}
          />
          <Prize
            src={Best100Img}
            title="100 BEST WoW Photos 50 WoW Videos"
            desc={['Mementos + Certificates']}
          />
        </div>
        <div className='flex-center pt-3'>
          Note: TDS, Taxes , Road Taxes, Insurance  etc will be deducted / Applicable and borne by the participants as per the govt taxation rules.
          Gifts and Vouchers offered by Sponsors and partners will not be exchanged with Cash.
        </div>
      </div>
      {/*<div className="flex-center pt-3">*/}
      {/*  <EnterBtn className="btn pl-5 pr-5 btn-info" />*/}
      {/*</div>*/}
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
