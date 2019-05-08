import React from 'react'
import ModalLayout from './modallayout';
import delimg from "../../assets/img/warning.png"
import Deletebtn from '../collections/deletebtn';
import { CloseModalBtn } from './modalbtns';

//modal name: DELETE_MODAL
const DeleteModal = ({ id }) => {
    return (
        <ModalLayout>
            <div className="flex-center flex-column text-center">
                <img className="mb-3" src={delimg} alt="" />
                <p>Are you sure you want to delete the photograph?</p>
            </div>
            <div className="flex-center pt-3">
                <div>
                    <CloseModalBtn className="btn btn-light-grey f-14 mr-3">
                        Cancel
                    </CloseModalBtn>
                    <Deletebtn id={id} />
                </div>
            </div>
        </ModalLayout>
    )
}

export default DeleteModal