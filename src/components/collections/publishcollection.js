import React from 'react'
import PublishCard from './publishcard';
import { connect } from 'react-redux'
import DynamicList from '../common/dynamiclist';
import { Link } from "react-router-dom"

const PublishCollection = ({ my_collection }) => {
    return (
        <div className="pt-3">
            <div className="row pb-3">
                {
                    my_collection.fetching !== null && my_collection.submitted.length === 0 ?
                    <div className="col-md-12">
                        <div className="flex-center border" style={{height: `130px`}}>
                            <div>
                                <Link className="btn btn-theme btn-pill" to="/my-collection/private-photographs">
                                    Add Photos
                                </Link>
                            </div>
                        </div>
                    </div> :
                    <DynamicList
                        RenderItem={(props) => (
                            <div className="col-md-6">
                                <PublishCard
                                    {...props}
                                />
                            </div>
                        )}
                        title="private-collection"
                        list={my_collection.submitted}
                        fetching={my_collection.fetching}
                    />
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ my_collection }) => ({
    my_collection
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PublishCollection)