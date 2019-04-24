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
                    <h2 className="text-center f-600 mb-3 theme-red">PRIZES</h2>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <div className="row flex-center">
                                <div className="col-md-6">
                                    <img src={photoOfYear} className="w-100" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="f-600">PHOTO OF THE YEAR 2019</h5>
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li className="mb-1">One Grand Winner</li>
                                        <li className="mb-1">US $2000</li>
                                        <li className="mb-1">All Paid International Trip</li>
                                        <li className="mb-1">Trophy & Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="row flex-center">
                                <div className="col-md-6">
                                    <img src={createye} className="w-100" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="f-600">CREATIVE EYE AWARD 2019</h5>
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li className="mb-1">One Creative Eye Winner</li>
                                        <li className="mb-1">US $2000</li>
                                        <li className="mb-1">All Paid International Trip</li>
                                        <li className="mb-1">Trophy & Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="row flex-center">
                                <div className="col-md-6">
                                    <img src={explorer} className="w-100" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="f-600">EXPLORER AWARD 2019</h5>
                                    <ul className="m-0 p-0 list-unstyled">
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
                                    <img src={besthun} className="w-100" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="f-600">100 BEST PHOTO AWARDS</h5>
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li className="mb-1">Six Winners for Final Photo Challange</li>
                                        <li className="mb-1">Certificates</li>
                                        <li className="mb-1">Photo Exhibition for World Tourism Day</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-3 mb-3">
                            <div className="flex-center p-1 flex-column text-center">
                                <img src={createye} style={{ height: `200px` }} alt="" />
                                <div className="pt-4">
                                    <h5 className="f-600">CREATIVE EYE AWARD 2019</h5>
                                    <ul className="m-0 p-0 list-unstyled">
                                        <li className="mb-1">One Creative Eye Winner</li>
                                        <li className="mb-1">US $2000</li>
                                        <li className="mb-1">All Paid International Trip</li>
                                        <li className="mb-1">Trophy & Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-3">
                            <div className="flex-center p-3 flex-column text-center">
                                <img src={besthun} style={{height: `200px`}} alt=""  />
                                <h5 className="mb-3 mt-3">2nd Place</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto minima doloremque minus assumenda ducimus soluta, earum quod saepe fuga perspiciatis asperiores pariatur, dolor culpa suscipit. Excepturi corporis nulla sed.</p>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="flex-center p-3 flex-column text-center">
                                <img src={createye} style={{height: `200px`}} alt=""  />
                                <h5 className="mb-3 mt-3">3rd Place</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto minima doloremque minus assumenda ducimus soluta, earum quod saepe fuga perspiciatis asperiores pariatur, dolor culpa suscipit. Excepturi corporis nulla sed.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="flex-center p-3 flex-column text-center">
                                <img src={explorer} style={{height: `200px`}} alt=""  />
                                <h5 className="mb-3 mt-3">3rd Place</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto minima doloremque minus assumenda ducimus soluta, earum quod saepe fuga perspiciatis asperiores pariatur, dolor culpa suscipit. Excepturi corporis nulla sed.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section>
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