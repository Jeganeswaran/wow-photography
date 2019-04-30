import React from 'react';
import { CloseModalWrapper, ModalCon } from './modalbtns';

const ModalLayout = ({ title, children, maxWidth }) => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon 
                className={`modal-container signin-modal`} 
                style={maxWidth ? { maxWidth : `${maxWidth}px` } : {}}
            >
                {title && <div className="mb-4">
                    <h4 className="font-weight-bold">{title}</h4>
                </div> }
                {children}
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default ModalLayout
