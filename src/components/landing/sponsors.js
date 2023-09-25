import React from 'react'
import { connect } from 'react-redux'
import Loader from '../common/loader';
import SponsorSlide from './sponsorslide';
import { LANDING, landing_url } from '../../redux/actions/constants';
import useHttp from '../../hooks/http/useHttp';

const Sponsors = ({ dispatch, fetching, sponsors }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    if (fetching) {
        return (
            <div className="flex-center">
                <Loader width="30px" height="30px" />
            </div>
        )
    }
    if (sponsors.length > 0) {
        return <SponsorSlide sponsors={sponsors} />
    }
    return null
    // return (
    //     <div className="row">
    //         <DynamicList 
    //             RenderItem={({logo, name, website}) => (
    //                 <div className="col-md-3 mb-4">
    //                     <div className="sponsor-img mb-3">
    //                         <img src={logo} className="w-100" alt={name} />
    //                     </div>
    //                     <div className="text-center">
    //                         <a rel="noopener noreferrer" target="_blank" className="f-18 f-600" href={website}>{name}</a>
    //                     </div>
    //                 </div>
    //             )}
    //             title="sponsors"
    //             list={sponsors}
    //             fetching={fetching}
    //         />
    //     </div>
    // )
}

const mapStateToProps = ({ landing_page }) => ({
    sponsors: landing_page.data.sponsors || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(Sponsors)