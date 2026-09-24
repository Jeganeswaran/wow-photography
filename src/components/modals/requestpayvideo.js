import React, { useEffect } from 'react'
import RequestVideoModal from '../collections/reqvideomdal'
import { connect } from 'react-redux'
import CenterLoader from './centerloader'
import ModalLayout from './modallayout'
import { master_url, MASTER_VALUES } from '../../redux/actions/constants'
import { addVideoSuccess } from '../../redux/actions/user'
import { addToast, closeModal } from '../../redux/actions/common'
import { loadData } from '../../redux/actions/http'

//REQPAYVIDEO_MODAL
const ReqpayVideoModal = (props) => {
  //load categories
  useEffect(() => {
    props.loadData(MASTER_VALUES, { url: master_url }, 'master_values')
  }, [])

  if (props.master_values.fetching) {
    return (
      <div className="modal-wrapper">
        <CenterLoader />
      </div>
    )
  }
  if (
    props.master_values.data.video_category &&
    props.master_values.data.video_category.length > 0
  ) {
    return (
      <ModalLayout
        maxWidth={550}
        title={'Confirm Video Type & Link'}
        children={<RequestVideoModal {...props} />}
      />
    )
  }
  return null
}

const mapStateToProps = ({ master_values, user }) => ({
  master_values,
  user,
})

const mapDispatchToProps = {
  addVideoSuccess,
  addToast,
  closeModal,
  loadData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReqpayVideoModal)
