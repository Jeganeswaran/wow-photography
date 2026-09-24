import React from 'react'
import PubLish from '../collections/publish';
import ModalLayout from './modallayout';

//PUBLISH_MODAL
const PublishModal = ({ id }) => {
    return (
        <ModalLayout 
            title="Choose Category"        
            children={<PubLish id={id} />}
        />
    )
}

export default PublishModal