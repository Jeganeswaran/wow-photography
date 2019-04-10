import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import Changepwd from '../auth/changepwd';

//modal name: CHANGEPWD_MODAL
const ChangePwdModal = () => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon className="modal-container signin-modal">
                <div className="mb-4">
                    <h3 className="font-weight-bold">Change Password</h3>
                </div>
                <Changepwd />
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default ChangePwdModal
