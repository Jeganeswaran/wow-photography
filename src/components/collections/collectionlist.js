import React, { useEffect } from 'react'
import ScrollList from '../common/scrollList';
import PublishCard from './publishcard';
import { PUBLISHED_COLLECTION, photos_url, PRIVATE_COLLECTION } from '../../redux/actions/constants';
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/http';

const CollectionList = ({ isSubmitted = false, listData, objName, userId, loadData }) => {

    const type = isSubmitted ? PRIVATE_COLLECTION : PUBLISHED_COLLECTION;

    const url = photos_url + (isSubmitted ? `?is_published=${isSubmitted}` : '');

    useEffect(() => {
        if(userId){
            loadData(type, { url }, objName, {userId})
        }
    }, [userId, type])

    return (
        <ScrollList
            RenderItem={(props) => (
                <div className="col-md-6">
                    <PublishCard
                        isSubmitted
                        {...props}
                    />
                </div>
            )}
            type={type}
            listData={listData}
            objName={objName}
            rest={{userId}}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    listData: state[ownProps.isSubmitted ? "private_collection" : "public_collection"][state.user.id],
    objName: (ownProps.isSubmitted ? "private_collection" : "public_collection") + " " + state.user.id,
    userId: state.user.id
})

const mapDispatchToProps = {
    loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList)