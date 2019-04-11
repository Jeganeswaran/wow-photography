import React from 'react'
import Submitbtn from '../common/submitbtn';
import { connect } from 'react-redux'
import { photos_url } from '../../redux/actions/constants';
import { addToast } from '../../redux/actions/common';
import { addPhotoSuccess } from '../../redux/actions/user';

const PublishBtn = ({ id, dispatch, category = 1 }) => {
    return (
        <Submitbtn
            className="btn btn-pill btn-publish"
            title="Publish"
            config={{
                url: photos_url + id + "/photo_submit/",
                method: "POST",
                data: {
                    category: 1
                }
            }}
            success={
                (data) => {
                    dispatch(addPhotoSuccess(data));
                    dispatch(addToast("Photo Published"))
                }
            }
        />
    )
}

export default connect(null)(PublishBtn)
