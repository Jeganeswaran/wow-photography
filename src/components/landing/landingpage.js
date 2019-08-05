import React from 'react'
import Banner from './banner';
import { connect } from 'react-redux'
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';
import WowPics from './WowPics';
import PrizeSection from './prizesection';
import SponsorSection from './sponsorsection';
import EnterBtn from './EnterBtn';
import Categories from './categories';
import Countries from './countries';
import FbPage from '../static/FbPage';
import Loader from '../common/loader';

const LandingPage = ({ dispatch }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <div>
            <Banner />
            <section className="post-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h3 className="f-700" style={{ color: `rgba(0, 0, 0, 0.6)`, fontSize: `52px` }}>TIME TO BE SEEN BY THE WORLD</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-1" />
                        <div className="col-md-10">
                            <p className="sourcesans f-15 text-justify" style={{ color: `rgba(0, 0, 0, 0.4)`, lineHeight: 1.8 }}>WOW PHOTO AWARDS is crafted to encourage the world’s most outstanding and talented souls in the field of photography focusing Travel and Tourism. "WOW PHOTO AWARDS" is an open contest to all Professionals and Amateur Photographers across the world. WOW PHOTO AWARDS 2019 submissions starts from 1st May 2019 under 12 categories. Top 6 Winners to get International Photo Challenge Trip , 2 Grand Winners and 100 Best Photo Appreciation Awards and more.</p>
                            <div className="flex-center pt-5">
                                <EnterBtn className="btn pl-5 pr-5 btn-outline-info" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Countries />
            <PrizeSection />
            <section className="post-section border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <FbPage width="500">
                                <div className="p-3">
                                    <Loader width="50px" height="50px" />
                                </div>
                            </FbPage>
                        </div>
                        <div className="col-md-3" />
                    </div>
                </div>
            </section>
            <Categories />
            <WowPics />
            <SponsorSection />
        </div>
    )
}

const mapStateToProps = ({ landing_page }) => ({
    wow_pick: landing_page.data.wow_pick || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(LandingPage)