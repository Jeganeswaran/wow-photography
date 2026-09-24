import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CenterLoader from './centerloader'
import { CloseModalWrapper, ModalCon } from './modalbtns'
import { MASTER_VALUES, master_url } from '../../redux/actions/constants'
import { addVideoSuccess } from '../../redux/actions/user'
import { addToast, closeModal } from '../../redux/actions/common'
import { loadData } from '../../redux/actions/http'
import MultiVideoSubmit from '../collections/multivideosubmit'

//MULTIVIDEO_MODAL
const MultiVideoModal = (props) => {
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
      <CloseModalWrapper className="modal-wrapper">
        <ModalCon className="modal-container contest-modal">
          <div className="mb-4">
            <h4 className="font-weight-bold">
              {' '}
              Confirm video types before submission
            </h4>
          </div>
          <MultiVideoSubmit {...props} />
        </ModalCon>
      </CloseModalWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(MultiVideoModal)
