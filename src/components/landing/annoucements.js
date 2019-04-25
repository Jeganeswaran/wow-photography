import React from 'react'
import { connect } from 'react-redux'
import DynamicList from '../common/dynamiclist';
import Pagelayout from '../common/pagelayout';
import useHttp from '../../hooks/http/useHttp';
import { LANDING, landing_url } from '../../redux/actions/constants';
import { Link } from "react-router-dom"
import dateFormat from '../../utils/dateFormat';

const Announcements = ({ dispatch, fetching, announcements }) => {

    useHttp(dispatch, LANDING, { url: landing_url }, "landing_page");

    return (
        <Pagelayout>
            <div className="row">
                <DynamicList
                    RenderItem={({image, title, short_descriptions, created_on}) => (
                        <div className="col-md-6">
                            <div className="row border announcement">
                                {image &&<div className="col-md-4 p-0">
                                    <img className="announce-img" src={image} alt={title} />
                                </div> }
                                <div className={`col-md-${image ? "8" : "4"}`}>
                                    <div className="d-flex h100p justify-content-between flex-column pt-2 pb-2">
                                        <div>
                                            <h5 className="f-600 mb-1">{title}</h5>
                                            <p>{short_descriptions}</p>
                                        </div>
                                        <div className="flex-between">
                                            <span className="f-14">{dateFormat(created_on)}</span>
                                            <Link to="/announcements" className="btn btn-theme">
                                                Know more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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