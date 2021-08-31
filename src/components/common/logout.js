import React from 'react'
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import { logout_url } from '../../redux/actions/constants';
import { closeModal, addToast } from '../../redux/actions/common';
import { logOutUser } from '../../redux/actions/user';

const Links = ({ className="btn-a f-14", closeModal, addToast, logOutUser }) => {
    return (
        <OpenModalBtn
            className={className}
            modalName="LOADING_MODAL"
            modalProps={{
                config: {
                    url: logout_url,
                    method: "DELETE"
                },
                succFunc(data) {
                    logOutUser();
                    closeModal();
                },
                errFunc(data) {
                    addToast(data, false);
                    closeModal();
                }
            }}
        >
            Sign Out
        </OpenModalBtn>         
    )
}

const mapStateToProps = ({ user }) => ({
    isToken: user && user.token
})

const mapDispatchToProps = {
    addToast, closeModal, logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Links)