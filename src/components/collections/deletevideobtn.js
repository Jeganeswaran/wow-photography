import React from 'react'
import { videos_url } from '../../redux/actions/constants'
import { OpenModalBtn } from '../modals/modalbtns'
import { connect } from 'react-redux'
import { addToast, closeModal } from '../../redux/actions/common'
import { addVideoSuccess } from '../../redux/actions/user'

const DeleteVideoBtn = ({ id, addVideoSuccess, closeModal }) => {
  return (
    <OpenModalBtn
      className="btn f-14 btn-theme"
      modalName="LOADING_MODAL"
      modalProps={{
        config: {
          url: videos_url + id + '/delete_video/',
          method: 'DELETE',
        },
        succFunc(res) {
          addVideoSuccess(res)
          closeModal()
        },
        errFunc(res) {
          addToast(res, false)
        },
      }}
    >
      Delete
    </OpenModalBtn>
  )
}

export default connect(null, { addVideoSuccess, addToast, closeModal })(
  DeleteVideoBtn
)
