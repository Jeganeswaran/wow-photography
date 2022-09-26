import React from 'react'
import Post from './post';
import { connect } from 'react-redux'
import DynamicList from '../common/dynamiclist';

const WowPics = ({ fetching, wow_pick }) => {
    return (
        <div className="post-section bg-light-grey">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="montserrat theme-red f-700">GALLERIES</h2>
                </div>
                <div className="row">
                    <DynamicList
                        RenderItem={(props) => (
                            <div className="col-md-4">
                                <Post {...props} />
                            </div>
                        )}
                        title="wow-picks"
                        list={wow_pick}
                        fetching={fetching}
                    />
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({ landing_page }) => ({
    wow_pick: landing_page.data.wow_pick || [],
    fetching: landing_page.fetching
})

export default connect(mapStateToProps)(WowPics)