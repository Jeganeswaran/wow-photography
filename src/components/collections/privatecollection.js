import React from 'react'
import AddPhotos from './addphotos';
import GuideLines from './guidelines';
import PublishCard from './publishcard';
import { connect } from 'react-redux'
import DynamicList from '../common/dynamiclist';
import { addPhotoSuccess } from '../../redux/actions/user';
import { addToast } from '../../redux/actions/common';

const PrivateCollection = ({ my_collection, addPhotoSuccess, addToast }) => {

    return (
        <div className="pt-3">
            <div className="row pb-3">
                <DynamicList
                    RenderItem={(props) => (
                        <div className="col-md-6">
                            <PublishCard
                                {...props}
                            />
                        </div>
                    )}
                    title="private-collection"
                    list={my_collection.private_collection}
                    fetching={my_collection.fetching}
                />
            </div>
            <AddPhotos
                addPhotoSuccess={addPhotoSuccess}
                addToast={addToast}
            />
            <GuideLines />
        </div>
    )
}

const mapStateToProps = ({ my_collection }) => ({
    my_collection
})

const mapDispatchToProps = {
    addPhotoSuccess, addToast
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateCollection)
