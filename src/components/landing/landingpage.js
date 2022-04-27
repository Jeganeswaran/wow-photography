import React from 'react'
import Banner from './banner'
import {connect} from 'react-redux'
import useHttp from '../../hooks/http/useHttp'
import {LANDING, landing_url} from '../../redux/actions/constants'
import WowPics from './WowPics'
import PrizeSection from './prizesection'
import SponsorSection from './sponsorsection'
import {PhotoCategories} from './categories'
import AboutEvent from '../../assets/img/about.jpg'
import Shortlisted from "./shortlisted";

const photoEntries = ["Abhilash Viswa - Ponnani,  Malappuram(dist)", "Abinaya Ramamurthi - Thanjavur", "Abinesh Sekar - Pudukkottai", "Abishek Allan - Madurai", "Abishek Vaidyanathan - Valparai", "Ajay S - Kanyakumari", "Ajitkumar S - Vellore/nandhiyalam", "Alaghu Prasanth A - Tirupur", "AMAR RAMESH - Chennai", "ANAND S - TIRUCHIRAPPALLI", "Ar Rez - Dindigul", "Aravind A J - Madurai", "Aravindhan Kamaraj - tiruvarur", "Arjun Venkatesh - Chennai", "Arul Prakash - Trichy", "Arun pandi - Usilampatti", "Arunkumar Varadharajan - Tiruchengode,Namakkal", "Arunprasath V M - Chennai", "Aswin Vijay - Coimbatore", "Babu D - Tiruchirappalli", "Babu Logesh - Chennai", "Badrinarayanan Kannan - Chennai", "BALASANKAR ALIAS AJITH - Tuticorin", "Beema Das - Chennai", "Bharath M - Bangalore", "Bharath mari - Chennai", "Bothees Bothees - Trichy", "Chakkaravarthi Sudhersan - Kumbakonam", "CHIDAMBARAM SIVATHANU - TIRUCHIRAPPALLI", "DHANASEKAR R - CHENNAI", "Dhenesh Annamalai - Salem", "Dinesh P - Perambalur", "Gautam Sekar - Madurai", "Gayathri Sekar - Tambaram", "Gopi Shyam - Madurai", "Gunasekaran Ramadoss - Chennai", "Haarihaaran Madeswaran - Gobichettipalayam", "HARIKRISHNA NARLA - KARIMNAGAR", "Jagadeesh Babu Gnanasekaran - Vellore", "Jenith M - Tirunelveli", "Karthi Karthick - Chennai", "Karthik Sriraman - Chennai", "Karthikeyan Radha - Cuddalore", "Lakshminarayanan L - Chennai", "Madhan sundhar - Tirunelveli", "Madhusudanan Parthasarathy - Chennai", "Manivannan R - Thanjavur", "MANOHARAN GOVINDARAJAN - CHENNAI", "manu vm - Malappuram", "Mohamed Siddique Jahir Hussain - Eravancheri", "Mohan Kumar Mariyappan - Virudhunagar", "Mouhamed Moustapha - Pondicherry", "Moulidharan M - Erode", "murugaraj lakshmanan - chennai", "NAVA BHARAT SELVA BALRAJ - Madurai", "Naveen Kumar P - chennai", "Naveen Raj - Salem", "PARIVEL VEERASAMY - VEDARNYAM", "Partheepan D - Namakal", "PAVITHRA KANNAN - MADURAI", "PRABU DEVAN - TRICHY", "PRABU MOHAN - Tirunelveli", "Prakash Chellamuthu - Trichy", "Prashanth Swaminathan - Chennai", "Pratap J - Bangalore", "Prathap Arumugam - Puducherry", "Praveen Kumar - Pattukkottai", "Praveen M - salem", "Preeti Tamilarasan - Chennai", "R DINESH KUMAR - CHENNAI", "Raghavprasanna L - Chennai", "RajKumar R - Cuddalore", "Ravikanth Kurma - Tatipaka", "RISHINANDHAN M C - Namakkal", "S.Lenin shunmugam - Madurai", "Sachin Solomon Raj - Chennai", "Sai Prasath - Madurai", "Saleem Basha - Namakkal", "Santhosh Kumar - Chennai", "Santhosh Pandurangan - Thiruthani", "Saran Dashnamoorthy - Tiruvannamalai", "Saran Saravana - Theni", "SARATH KUMAR T - BODI", "Saravana Kumar - Thoothukudi", "Sasi Kumar - Vellore", "SASIKUMAR V - COIMBATORE", "Sathiyaseelan .S - Chennai", "Sesha Raja Sankaran A - Chennai", "Shafiur Rahman - Gudalur-Ooty", "Sharan Ragesh - Chennai", "Siva Chandru - Chennai", "Siva Prasad B - NAGERCOIL", "Smita Joshi - Chennai", "SOWNDARYA CHIDAMBARAM - TIRUCHIRAPPALLI", "Srijith J - Chennai", "Sudharshan Kuselan - Chennai", "Sugan Murali - Chennai", "sugu maran N - trichy", "Sundaram Perumal - Theni", "Sundararajaperumal Anandakrishnan - Chennai", "Suresh Kannan - Chennai", "Suresh Kumar Chinnasamy - Chennai", "SURIYA KATHIR - ERODE", "Syed Wasim - Chennai", "Tamil Selvan - Guduvanchery", "Thirumalai A - Chennai", "Thirumalai vasan subramani - tirupattur", "Velmurugan Devarajan - Tiruchengode", "venkatakrishnan vijayarahavan - Chennai", "VENKATESH RAMACHANDRAN - THURAIYUR", "Vidhyatharan Rajendran - Chennai", "Vignesh A A - Chennai", "Vignesh Sekar - Pollachi", "VIGNESHWARAN KRISHNAN - BIG KANCHIPURAM", "Vineesh J - Chennai", "Vishnuvarthan Rajagopal - Pollachi", "wewin pandian - coimbatore", "YEDU KRISHNAN K B - Theni", "Zulfikhar Ahmed - Chennai"]
const videoEntries = ["Abinesh Sekar - Pudukkottai", "Adhiyaman PM - Chennai", "Ananth Prabu - chennai", "Aravind A J - Madurai", "Arjun Venkatesh - Chennai", "Arul Prakash - Trichy", "Arun Prasanth S - coimbatore", "Barath Raj - Arcot", "Beema Das - Chennai", "Bharathi Kanna - Hosur", "Dhanushkodi C - Erode", "Elaventhan Photography - Mannargudi", "Gautam Sekar - Madurai", "Gopalakrishnan M - Trichy", "Gowtheesh Thiyagarajah - Trichy", "Grishwin Karnal E - Dindigul", "Jenith M - Tirunelveli (D.t)", "John Milton - Bangalore", "Karthi Karthick - Chennai", "Karthick Kumar - Salem", "Karthik Swaminathan - Pattukkottai", "LAKSHMI SHREE - CHENNAI", "Manikanta Allaka - Hyderabad", "Moulidharan M - Erode", "Muthu Sankar - Karaikudi", "Papilraj Palani - Chennai", "Pratap J - Bangalore", "Praveen M - salem", "Saran Dashnamoorthy - Tiruvannamalai", "Saravana Meenakshisundari - Madurai", "Sasi Kumar - Vellore", "Sesha Raja Sankaran A - Chennai", "shabeer ahammed - Chennai", "Shafiur Rahman - Gudalur-Ooty", "Sherly Hephzibah J - Tiruvallur", "Siva Subramanian L - KUMBAKONAM", "Srihari Karanth - Bangalore", "Vasanth S - Madurai", "Venkatraman R - KANCHIPURAM", "Vignesh Sekar - Pollachi", "Vigneshwaran B - Cuddalore", "Vineesh J - Chennai", "Yogaraj Chinnadurai - Chennai"]

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
      <section className='post-section'>
        <img className='img-fluid' src={AboutEvent} alt='About Event' style={{width: '100%'}}/>
      </section>
      <Shortlisted title='Shortlisted Entries for Photography' entries={photoEntries}/>
      <Shortlisted title='Shortlisted Entries for Video' entries={videoEntries}/>
      <PrizeSection/>
      {/*<section className='post-section'>*/}
      {/*  <img className='img-fluid' src={Shortlist} alt='Shortlist' style={{width: '100%'}}/>*/}
      {/*</section>*/}
      <PhotoCategories/>
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
