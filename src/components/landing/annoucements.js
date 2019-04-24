import React from 'react'
import { connect } from 'react-redux'
import DynamicList from '../common/dynamiclist';
import Pagelayout from '../common/pagelayout';
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';

const Announcements = ({ dispatch, fetching, announcements }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <Pagelayout>
            <div className="row">
                <DynamicList
                    RenderItem={(props) => (
                        <div className="col-md-6">

                        </div>
                    )}
                    title="wow-picks"
                    list={announcements}
                    fetching={fetching}
                />
            </div>
        </Pagelayout>
    )
}

const mapStateToProps = ({ landing_page }) => ({
    announcements: landing_page.data.announcements || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(Announcements)