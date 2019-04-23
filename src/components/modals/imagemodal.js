import React from 'react'
import { CloseModalWrapper, ModalCon, OpenImg } from './modalbtns'

const ImageModal = ({ image }) => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon>
                <img src={image} className="modalprev-img" alt="" />
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default ImageModal
