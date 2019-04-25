import React from 'react'
import Banner from './banner';
import PageLayout from '../common/pagelayout';
import photoOfYear from "../../assets/img/prize/Photo-of-the-year.png";
import besthun from "../../assets/img/prize/100-best.png";
import explorer from "../../assets/img/prize/EXPLORER-AWARDS.png";
import createye from "../../assets/img/prize/Creative-eye-award.png";
import { connect } from 'react-redux'
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';
import WowPics from './WowPics';
import Sponsors from './sponsors';

const LandingPage = ({ dispatch }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <div>
            <Banner />
            <PageLayout>
                <WowPics />
            </PageLayout>
            <section className="bg-light-grey post-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="montserrat f-600 mb-2 theme-red">WIN EXICITING PRIZES</h2>
                        <p className="poppins">Win upto US $2000 in four different award categories</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="row flex-center">
                                <div className="col-md-6">
                                    <div className="p-3">
                                        <img src={photoOfYear} className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="montserrat f-600 text-center text-md-left">PHOTO OF THE YEAR 2019</h5>
                                    <ul className="m-0 p-0 list-unstyled text-center text-md-left poppins">
                                        <li className="mb-1">One Grand Winner</li>
                                        <li className="mb-1">US $2000</li>
                                        <li className="mb-1">All Paid International Trip</li>
                                        <li className="mb-1">Trophy & Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="row flex-center text-center text-md-left">
                                <div className="col-md-6">
                                    <div className="p-3">
                                        <img src={createye} className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="montserrat f-600">CREATIVE EYE AWARD 2019</h5>
                                    <ul className="m-0 p-0 list-unstyled text-center text-md-left poppins">
                                        <li className="mb-1">One Creative Eye Winner</li>
                                        <li className="mb-1">US $1000</li>
                                        <li className="mb-1">All Paid International Trip</li>
                                        <li className="mb-1">Trophy & Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="row flex-center text-center text-md-left">
                                <div className="col-md-6">
                                    <div className="p-3">
                                        <img src={explorer} className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="montserrat f-600 text-center text-md-left">EXPLORER AWARD 2019</h5>
                                    <ul className="poppins m-0 p-0 list-unstyled text-center text-md-left">
                                        <li className="mb-1">Six Winners for Final Photo Challange</li>
                                        <li className="mb-1">All Paid International Trip</li>
                                        <li className="mb-1">Trophy & Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="row flex-center">
                                <div className="col-md-6">
                                    <div className="p-3">
                                        <img src={besthun} className="w-100" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="montserrat f-600 text-center text-md-left">100 BEST PHOTO AWARDS</h5>
                                    <ul className="poppins m-0 p-0 list-unstyled text-center text-md-left">
                                        <li className="mb-1">Certificates</li>
                                        <li className="mb-1">Photo Exhibition for World Tourism Day</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="post-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="montserrat f-600 mb-4 theme-red">OUR SPONSORS</h2>
                    </div>
                    <Sponsors />
                </div>
            </section>
            <section className="bg-light-grey">
                <div className="container pt-5 pb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab voluptate eligendi nobis voluptates harum vero facilis omnis repellat. Expedita officiis voluptatibus id numquam culpa illo provident aliquid ab inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti deleniti voluptatibus corporis! Velit quo consectetur ad ratione architecto? Veniam ut exercitationem quod unde sint dicta, dolorem sunt reprehenderit officiis!
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = ({ landing_page }) => ({
    wow_pick: landing_page.data.wow_pick || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(LandingPage)