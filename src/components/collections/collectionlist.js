import React, { useEffect } from 'react'
import ScrollList from '../common/scrollList';
import PublishCard from './publishcard';
import { PUBLISHED_COLLECTION, photos_url, PRIVATE_COLLECTION } from '../../redux/actions/constants';
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/http';
import { changeMulti } from '../../redux/actions/user';

const CollectionList = ({ isSubmitted = false, changeMulti, ids, listData, objName, userId, loadData }) => {

    const type = isSubmitted ? PUBLISHED_COLLECTION : PRIVATE_COLLECTION;

    const url = photos_url + (isSubmitted ? `?is_published=${isSubmitted}` : '');

    useEffect(() => {
        if(userId){
            loadData(type, { url }, objName, {userId})
        }
    }, [userId, type])

    if(listData) {
        return (
            <ScrollList
                RenderItem={(props) => (
                    <div className="col-md-6">
                        <PublishCard
                            isSubmitted
                            multiDispatch={changeMulti}
                            ids={ids}
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
    return null;
}

const mapStateToProps = (state, ownProps) => ({
    listData: state[ownProps.isSubmitted ? "public_collection" : "private_collection"][state.user.id],
    objName: (ownProps.isSubmitted ? "public_collection" : "private_collection") + " " + state.user.id,
    userId: state.user.id,
    ids: state.multi_select.ids
})

const mapDispatchToProps = {
    loadData, changeMulti
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList)