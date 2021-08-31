import React from 'react'
import ModalLayout from './modallayout';
import delimg from "../../assets/img/information.png"

//modal name: REJECTINFO_MODAL
const RejectInfoModal = ({ content = null }) => {
    return (
        <ModalLayout>
            <div className="flex-center flex-column text-center">
                <img className="mb-3" src={delimg} alt="" />
                {content}
            </div>
        </ModalLayout>
    )
}

export default RejectInfoModal