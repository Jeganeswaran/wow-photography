import React from 'react'
import { CloseModalWrapper, ModalCon, CloseModalBtn } from './modalbtns'
import useLoadImg from '../../hooks/useLoadImg';
import CenterLoader from './centerloader';

const ImageModal = ({ image }) => {

    const loading = useLoadImg(image);

    return (
        <CloseModalWrapper className="modal-wrapper relative">
            <CloseModalBtn className="btn btn-theme btn-close">
                <i className="fas fa-times"></i>
            </CloseModalBtn>
            {
                loading ?
                    <CenterLoader /> :
                    <ModalCon>
                        <img src={image} className="modalprev-img" alt="" />
                    </ModalCon>
            }
        </CloseModalWrapper>
    )
}

export default ImageModal