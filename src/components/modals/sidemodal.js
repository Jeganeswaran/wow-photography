import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import Links from '../common/links';

//modal name "SIDE_MODAL"
const SideModal = () => (
    <CloseModalWrapper className="side-modal-wrapper">
        <ModalCon className="side-modal-container">
            <div className="side-modal-body">
                <div className="side-account">

                </div>
                <div className="pt-2">
                    <ul className="side-modal-list">
                        <Links />
                    </ul>
                </div>
            </div>
        </ModalCon>
    </CloseModalWrapper>
)

export default SideModal