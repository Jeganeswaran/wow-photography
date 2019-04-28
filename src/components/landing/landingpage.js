import React from 'react'
import Banner from './banner';
// import PageLayout from '../common/pagelayout';
import { connect } from 'react-redux'
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';
// import WowPics from './WowPics';
import PrizeSection from './prizesection';
// import Sponsors from './sponsors';

const LandingPage = ({ dispatch }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <div>
            <Banner />
            <PrizeSection />
            {/* <PageLayout>
                <WowPics />
            </PageLayout> */}
            <section className="">
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