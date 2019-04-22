import React from 'react'
import PublishCard from './publishcard';
import { connect } from 'react-redux'
import ScrollPaging from '../common/scrollpaging';
import { addPhotoSuccess } from '../../redux/actions/user';
import { addToast } from '../../redux/actions/common';
import { PRIVATE_COLLECTION, photos_url } from '../../redux/actions/constants';

const PrivateCollection = ({ private_collection, addPhotoSuccess, addToast }) => {

    return (
        <div className="pt-3">
            <div className="row pb-3">
                <ScrollPaging 
                    RenderItem={(props) => (
                        <div className="col-md-6">
                            <PublishCard
                                {...props}
                            />
                        </div>
                    )}
                    type={PRIVATE_COLLECTION}
                    url={photos_url}
                    objName="private_collection"
                />
            </div>
        </div>
    )
}

const mapStateToProps = ({ private_collection }) => ({
    private_collection
})

const mapDispatchToProps = {
    addPhotoSuccess, addToast
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateCollection)
