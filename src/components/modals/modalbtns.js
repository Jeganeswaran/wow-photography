import React from 'react'
import { connect } from 'react-redux';
import { closeModal, openModal } from "../../redux/actions/common"
import useLockBodyScroll from "../../hooks/layout/useLockBodyScroll"

const CloseModal = ({ closeModal, children, ...button }) => {
    return (
        <button {...button} onClick={() => closeModal()}>
            {children}
        </button>
    )
}

const OpenModal = ({ children, openModal, modalName, modalProps = {}, ...rest }) => (
    <button onClick={() => openModal(modalName, modalProps)} {...rest}>
        {children}
    </button>
);

const ModalWrapCon = ({ children, closeModal, ...rest }) => {
    // Call hook to lock body scroll
    useLockBodyScroll();
    return (
        <div {...rest} onClick={() => closeModal()}>
            {children}
        </div>
    )
}

//modal container to prevent propagation modal wrapper click
export const ModalCon = ({ children, ...rest }) => {
    return (
        <div {...rest} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    )
}

//open modal btn
export const OpenModalBtn = connect(null, { openModal })(OpenModal);

//close modal button
export const CloseModalBtn = connect(null, { closeModal })(CloseModal);

//modal wrapper for outside click close
export const CloseModalWrapper = connect(null, { closeModal })(ModalWrapCon);