import React from 'react'
import PublishCard from './publishcard';
import { connect } from 'react-redux'
import ScrollPaging from '../common/scrollpaging';
import { Link } from "react-router-dom"
import { PUBLISHED_COLLECTION, photos_url } from '../../redux/actions/constants';

const PublishCollection = ({ public_collection }) => {
    return (
        <div className="pt-3">
            <div className="row pb-3">
                {
                    public_collection.count !== null && public_collection.data.length === 0 ?
                        <div className="col-md-12">
                            <div className="flex-center border" style={{ height: `130px` }}>
                                <div>
                                    <Link className="btn btn-theme btn-pill" to="/my-collection/private-photographs">
                                        Add Photos
                                </Link>
                                </div>
                            </div>
                        </div> :
                        <ScrollPaging
                            RenderItem={(props) => (
                                <div className="col-md-6">
                                    <PublishCard
                                        {...props}
                                    />
                                </div>
                            )}
                            type={PUBLISHED_COLLECTION}
                            url={photos_url + "?is_published=true"}
                            objName="public_collection"
                        />
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ public_collection }) => ({
    public_collection
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PublishCollection)