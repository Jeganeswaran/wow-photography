import React from 'react';
import Portal from '../common/portal';
import { connect } from 'react-redux';
import { closeModal } from "../../redux/actions/common";
import selectModal from "./selectmodal";
import "../../assets/css/modal.css";

const ModalContainer = ({ open, modalName, modalProps }) => {

    //select modal to render
    const Modalbody = selectModal(modalName);

    return (
        open ?
            <Portal>
                {
                    Modalbody &&
                    <Modalbody {...modalProps} />
                }
            </Portal> : null
    )
}

const Modal = connect((state) => state.modalReducer, { closeModal })(ModalContainer);

export default Modal;