import React from 'react'
import { photos_url } from '../../redux/actions/constants';
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import { addToast, closeModal } from '../../redux/actions/common';
import { addPhotoSuccess } from '../../redux/actions/user';

const DeleteBtn = ({ id, addPhotoSuccess, closeModal }) => {
    return (
        <OpenModalBtn
            className="btn f-14 btn-light theme-red btn-danger"
            modalName="LOADING_MODAL"
            modalProps={{
                config: {
                    url: photos_url + id + "/delete_photo/",
                    method: "DELETE"
                },
                succFunc(res) {
                    addPhotoSuccess(res);
                    closeModal();
                },
                errFunc(res) {
                    addToast(res, false);
                }
            }}
        >
            Delete
        </OpenModalBtn>
    )
}

export default connect(null, { addPhotoSuccess, addToast, closeModal })(DeleteBtn)
