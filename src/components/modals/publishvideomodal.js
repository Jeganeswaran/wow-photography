import React from 'react'
import PubLishVideo from '../collections/publishvideo'
import ModalLayout from './modallayout'

//PUBLISHVIDEO_MODAL
const PublishVideoModal = ({ id }) => {
  return (
    <ModalLayout
      title="Choose Video Type"
      children={<PubLishVideo id={id} />}
    />
  )
}

export default PublishVideoModal
