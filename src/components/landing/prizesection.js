import React from 'react'
import GrandWinnerImg from '../../assets/img/prize/2021-WOW-Grand-Winner.png'
import CreativeEyeImg from '../../assets/img/prize/2021-WOW-Creative-Eye.png'
import ExplorerImg from '../../assets/img/prize/2021-WOW-Explorer.png'
import SpecialMentionImg from '../../assets/img/prize/Special-Mention.png'

const PrizeSection = () => {
  return (
    <section className="post-section">
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
              'A Brand new CAR (OR) 3 Lakhs Cash Prize + Trophy + Certificate',
              '(One Grand Winner)'
            ]}
          />
          <Prize
            src={CreativeEyeImg}
            title="WOW Creative EYE Awards (2 Winners)"
            desc={[
              'Rs.50,000 Cash Prize + Trophy + CertificateOne for Photography & One for Video',
            ]}
          />
          <Prize
            src={SpecialMentionImg}
            title="WOW SPECIAL MENTION Awards (3 Winners)"
            desc={['Cordelia cruises Trip (Worth 25,000) + Trophy + Certificate']}
          />
          <Prize
            src={ExplorerImg}
            title="Explorer Awards"
            desc={[
              '<strong>Photography 13 Categories (13x3)</strong>',
              '<ol type="I">' +
              '<li>First Prize : Cordelia cruises Trip Worth 25,000+ Trophy + Certificate</li>' +
              '<li>Second Prize : 5000 Cash Prize + Trophy + Certificate</li>' +
              '<li>Third Prize : 3000 Cash Prize</li>' +
              '</ol>',
              '⠀',
              '<strong>Videography Best Entries (3 Winners)</strong>',
              '<ul>' +
              '<li>3 Winners to get Cordelia cruises Trip (Worth 25,000)  Trophy + Certificate</li>' +
              '</ul>'
            ]}
          />
        </div>
        <div className='flex-center pt-3'>
          Note: TDS, Taxes , Road Taxes, Insurance etc will be deducted / Applicable and borne by the participants as
          per the govt taxation rules.
          Gifts and Vouchers offered by Sponsors and partners will not be exchanged with Cash.
        </div>
      </div>
      {/*<div className="flex-center pt-3">*/}
      {/*  <EnterBtn className="btn pl-5 pr-5 btn-info" />*/}
      {/*</div>*/}
    </section>
  )
}

const Prize = ({src = null, title = '', desc = []}) => (
  <div className="col-md-6 mb-4">
    <div className="row flex-center">
      <div className="col-md-4">
        <div>
          <img src={src} className="w-100 prize-img" alt={title}/>
        </div>
      </div>
      <div className="col-md-8">
        <h5 className="montserrat f-600 text-center text-md-left">{title}</h5>
        <ul className="f-14 m-0 p-0 list-unstyled text-center text-md-left poppins">
          {desc.map((x, index) => (
            <li className="mb-1" key={title + index} dangerouslySetInnerHTML={{__html: x}}/>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default PrizeSection
