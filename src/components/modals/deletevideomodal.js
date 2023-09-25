import React from 'react'
import ModalLayout from './modallayout'
import delimg from '../../assets/img/warning.png'
import DeleteVideobtn from '../collections/deletevideobtn'
import { CloseModalBtn } from './modalbtns'

//modal name: DELETEVIDEO_MODAL
const DeleteVideoModal = ({ id }) => {
  return (
    <ModalLayout>
      <div className="flex-center flex-column text-center">
        <img className="mb-3" src={delimg} alt="" />
        <p>Are you sure you want to delete the video?</p>
      </div>
      <div className="flex-center pt-3">
        <div>
          <CloseModalBtn className="btn btn-light-grey f-14 mr-3">
            Cancel
          </CloseModalBtn>
          <DeleteVideobtn id={id} />
        </div>
      </div>
    </ModalLayout>
  )
}

export default DeleteVideoModal
