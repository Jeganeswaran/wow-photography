import React, { useEffect } from "react";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../redux/actions/common";
import useLockBodyScroll from "../../hooks/layout/useLockBodyScroll";

const CloseModal = ({ closeModal, children, ...button }) => {
    return (
        <button {...button} onClick={() => closeModal()}>
            {children}
        </button>
    );
};

const OpenModal = ({
    children,
    openModal,
    modalName,
    modalProps = {},
    ...rest
}) => (
    <button onClick={() => openModal(modalName, modalProps)} {...rest}>
        {children}
    </button>
);

const OpenImageModal = ({
    src,
    openModal,
    modalProps = {},
    alt = "",
    ...restProps
}) => {
    return (
        <img
            onClick={() => {
                openModal("IMAGE_MODAL", modalProps);
            }}
            src={src}
            alt={alt}
            {...restProps}
        />
    );
};

const ModalWrapCon = ({ children, closeModal, ...rest }) => {
    // Call hook to lock body scroll
    useLockBodyScroll();
    return (
        <div {...rest} onClick={() => closeModal()}>
            {children}
        </div>
    );
};

//modal container to prevent propagation modal wrapper click
export const ModalCon = ({ children, ...rest }) => {
    return (
        <div {...rest} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    );
};

const open = connect(
    null,
    { openModal }
);

//auto pop modal
export const AutoPopModal = open(({ openModal, modalName, modalProps }) => {
    useEffect(() => {
        openModal(modalName, modalProps);
    }, [modalName, modalProps]);

    return null;
});

//open modal btn
export const OpenModalBtn = open(OpenModal);
export const OpenImg = open(OpenImageModal);

//close modal button
export const CloseModalBtn = connect(
    null,
    { closeModal }
)(CloseModal);

//modal wrapper for outside click close
export const CloseModalWrapper = connect(
    null,
    { closeModal }
)(ModalWrapCon);
