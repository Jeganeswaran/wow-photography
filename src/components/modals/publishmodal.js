import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import PubLish from '../collections/publish';

//PUBLISH_MODAL
const PublishModal = ({ id }) => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon className="modal-container signin-modal">
                <div>
                    <div className="mb-4">
                        <h3 className="font-weight-bold">Choose Category</h3>
                    </div>
                    <PubLish id={id} />
                </div>
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default PublishModal
