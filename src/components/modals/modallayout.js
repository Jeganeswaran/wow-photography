import React from 'react';
import { CloseModalWrapper, ModalCon } from './modalbtns';

const ModalLayout = ({ title, children }) => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon className="modal-container signin-modal">
                <div className="mb-4">
                    <h3 className="font-weight-bold">{title}</h3>
                </div>
                {children}
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default ModalLayout
