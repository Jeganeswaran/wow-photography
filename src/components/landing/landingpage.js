import React from 'react'
import Banner from './banner';
// import PageLayout from '../common/pagelayout';
import { connect } from 'react-redux'
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';
import WowPics from './WowPics';
import PrizeSection from './prizesection';
import Sponsors from './sponsors';
import EnterBtn from './EnterBtn';
// import Sponsors from './sponsors';

const LandingPage = ({ dispatch }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <div>
            <Banner />
            <section className="post-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h3 className="montserrat f-700">TIME TO BE SEEN BY THE WORLD</h3>
                    </div>
                    <p><span className="theme-red">WOW PHOTO AWARDS</span> is crafted to encourage the world’s most outstanding and talented souls in the field of photography focusing Travel and Tourism. <span className="theme-red">"WOW PHOTO AWARDS"</span> is an open contest to all Professionals and Amateur Photographers across the world.</p><p><span className="theme-red">WOW PHOTO AWARDS 2019</span>  submissions starts from <b>1st May 2019</b> under 12 categories. Top 6 Winners to get International Photo Challenge Trip , 2 Grand Winners and 100 Best Photo Appreciation Awards and more.</p>
                    <div className="flex-center pt-3">
                        <EnterBtn className="btn pl-5 pr-5 btn-outline-info" />
                    </div>
                </div>
            </section>
            <PrizeSection />
            {/* <PageLayout>
                <WowPics />
            </PageLayout> */}
            <WowPics />
            <section className="post-section bg-light-grey">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="montserrat f-700 theme-red">PARTNERS</h2>
                    </div>
                    <Sponsors />
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