import React from 'react'
import Banner from './banner'
import {connect} from 'react-redux'
import useHttp from '../../hooks/http/useHttp'
import {LANDING, landing_url} from '../../redux/actions/constants'
import WowPics from './WowPics'
import SponsorSection from './sponsorsection'
import Winners from "./winners";

const winners = ["JENITH M - TIRUNELVELI", "ABINESH SEKAR - PUDUKOTTAI", "MOULIDHARAN M - ERODE", "MUTHU SANKAR - KARAIKUDI", "BEEMA DAS - CHENNAI", "GRISHWIN KARNAL E - DINDIGUL", "ARUNKUMAR VARADHARAJAN - NAMAKKAL", "CHIDAMBHARAM SIVATHANU - TRICHY", "BABU LOKESH - CHENNAI",  "MANOHARAN GOVINDARAJAN - CHENNAI", "KARTHIK SRIRAMAN - CHENNAI", "VISHNUVARTHAN RAJAGOPAL - POLLACHI", "MANU VM - MALAPPURAM", "AMAR RAMESH - CHENNAI", "SARAVANA KUMAR - THOOTHUKUDI", "SHARAN RAGESH - CHENNAI", "RAVIKANTH KURMA - TATIPAKA", "SIVA CHANDRU - CHENNAI", "ARUL PRAKASH - TRICHY", "SRIJITH J - CHENNAI", "SURESH KUMAR CHINNASAMY - CHENNAI", "PRABU MOHAN - TIRUNELVELI", "VIDYATHARAN RAJENDRAN - CHENNAI", "ABISHEK VAIDYANATHAN - VALPARAI", "SURIYA KATHIR - ERODE", "PRAKASH CHELLAMUTHU - TRICHY", "WEWIN PANDIAN - COIMBATORE", "DINESH P - PERAMBALUR", "SYED WASIM - CHENNAI", "PRASHANTH SWAMINATHAN - CHENNAI", "PREETI TAMILARASAN - CHENNAI", "SUGAN MURALI - CHENNAI", "MADHUSUDANAN PARTHASARATHY - CHENNAI", "SHAFIUR RAHMAN - GUDALUR - OOTY", "CHAKKARAVARTHI SUDHERSAN - KUMBAKKONAM", "RAGHAVPRASANNA L - CHENNAI", "VENKATAKRISHNAN VIJAYARAHAVAN - CHENNAI", "SARAN DASHNAMOORTHY - TIRUVANNAMALAI", "THIRUMALAI VASAN SUBRAMANI - TIRUPATTUR", "SIVA PRASAD B - NAGERCOIL", "MOHAMED SIDDUQUE JAHIR HUSSAIN - ERAVANCHERI", "HAARIHAARAN MADESWARAN - GOBICHETTIPALAYAM", "SATHIYASEELAN S - CHENNAI", "PRAVEEN KUMAR - PATTUKOTTAI", "MURUGARAJ LAKSHMANAN - CHENNAI", "GAUTAM SEKAR - MADURAI", "SARAN SARAVANA - THENI", "S.LENIN SHUNMUGAM - MADURAI"]

const LandingPage = ({dispatch}) => {
  useHttp(dispatch, LANDING, {url: landing_url}, 'landing_page')

  return (
    <div>
      <Banner/>
      <section className="post-section">
        <div className="container">
          <div className="text-center mb-5">
            <h3
              className="f-700 mb-2"
              style={{color: `rgba(0, 0, 0, 0.6)`, fontSize: `52px`}}
            >
              Photography &amp; Video Contest
            </h3>
            <h6>Theme: Tourist Experiences/Destinations of Tamil Nadu</h6>
          </div>
          <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-10">
              <p
                className="sourcesans f-15 text-justify"
                style={{color: `rgba(0, 0, 0, 0.4)`, lineHeight: 1.8}}
              >
                Everything is faded like rain cloud, but Photography is left
                like Earth. Documenting the rich antiquity of our soil that
                surrounds us shall be the main notion when it comes to impress
                the world with the glory of our tourism. To excavate the lost
                grandeur during this chaotic situation, a journey down the
                historical lane of Tamil Nadu is much needed. Get ready with
                your cameras to show the world the real glory of the soil. Wow
                Tamil Nadu Tourism Photo and Video festival joins hands with
                Tamil Nadu Tourism to be a part of the historic journey of
                rejuvenation with gifts and compliments.
              </p>
              {/*<div className="flex-center pt-3">*/}
              {/*  <EnterBtn className="btn pl-5 pr-5 btn-info" />*/}
              {/*</div>*/}
              {/*<div className="sourcesans f-15 pt-1 theme-red text-center">*/}
              {/*  *Registration closed*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>
      {/*<section className='post-section'>*/}
      {/*  <img className='img-fluid' src={AboutEvent} alt='About Event' style={{width: '100%'}}/>*/}
      {/*</section>*/}
      {/*<Shortlisted title='Shortlisted Entries for Photography' entries={photoEntries}/>*/}
      {/*<Shortlisted title='Shortlisted Entries for Video' entries={videoEntries}/>*/}
      <div className="post-section">
        <div className="container">
          <div className="text-center mb-4">
            <h3
              className="f-700 mb-2"
              style={{color: `rgba(0, 0, 0, 0.6)`, fontSize: `52px`}}>Winners</h3>
          </div>
        </div>
        <Winners title='GRAND WINNER' entries={winners.slice(0, 1)}/>
        <Winners title='CREATIVE EYE AWARDS' entries={winners.slice(1, 3)}/>
        <Winners title='BEST VIDEO WINNERS' entries={winners.slice(3, 6)}/>
        <Winners title='SPECIAL MENTION HONOUR AWARD' entries={winners.slice(6, 9)}/>
        <div className="container">
          <div className="text-center mb-4">
            <h3
              className="f-700 mb-2"
              style={{color: `rgba(0, 0, 0, 0.6)`, fontSize: `36px`}}>PHOTOGRAPHY WINNERS LIST - CATEGORY WISE</h3>
          </div>
        </div>
        <Winners title='ANIMAL KINGDOM' entries={winners.slice(9, 12)}/>
        <Winners title='ART & CULTURE' entries={winners.slice(12, 15)}/>
        <Winners title='JOY OF CELEBRATION' entries={winners.slice(15, 18)}/>
        <Winners title='HERITAGE' entries={winners.slice(18, 21)}/>
        <Winners title="NATURE'S MIRACLE" entries={winners.slice(21, 24)}/>
        <Winners title="PH20TOS" entries={winners.slice(24, 27)}/>
        <Winners title="SMILES OF TAMIL NADU" entries={winners.slice(27, 30)}/>
        <Winners title="TASTE OF TAMIL NADU" entries={winners.slice(30, 33)}/>
        <Winners title="UNDISCOVERED TAMIL NADU" entries={winners.slice(33, 36)}/>
        <Winners title="PLACES OF WORSHIP" entries={winners.slice(36, 39)}/>
        <Winners title="WANDERLUST" entries={winners.slice(39, 42)}/>
        <Winners title="FITOGRAPHY" entries={winners.slice(42, 45)}/>
        <Winners title="JALLIKATTU" entries={winners.slice(45, 48)}/>
      </div>
      {/*<PrizeSection/>*/}
      {/*<section className='post-section'>*/}
      {/*  <img className='img-fluid' src={Shortlist} alt='Shortlist' style={{width: '100%'}}/>*/}
      {/*</section>*/}
      {/*<PhotoCategories/>*/}
      <WowPics/>
      <SponsorSection/>
    </div>
  )
}

const mapStateToProps = ({landing_page}) => ({
  wow_pick: landing_page.data.wow_pick || [],
  fetching: landing_page.fetching,
})

export default connect(mapStateToProps)(LandingPage)
