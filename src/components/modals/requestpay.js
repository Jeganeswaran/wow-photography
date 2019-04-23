import React from 'react'
import RequestModal from '../collections/reqmdal';
import { CloseModalWrapper, ModalCon } from './modalbtns';

//REQPAY_MODAL
const ReqpayModal = props => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon className="modal-container signin-modal">
                <div className="mb-4">
                    <h3 className="font-weight-bold mb-0">Want to Submit Photo</h3>
                </div>
                <RequestModal {...props} />
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default ReqpayModal