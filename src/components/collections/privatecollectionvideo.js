import React from 'react'
import { connect } from 'react-redux'
import CollectionListVideo from './collectionlistvideo'
import Portal from '../common/portal'
import { OpenModalBtn } from '../modals/modalbtns'

const PrivateCollectionVideo = ({ ids }) => {
  return (
    <div className="pt-3">
      <div className="row pb-3">
        <CollectionListVideo />
      </div>
      {ids.length !== 0 && (
        <Portal>
          <OpenModalBtn
            modalName="MULTIVIDEO_MODAL"
            className="btn btn-theme btn-selected"
          >
            Submit Selected ({ids.length}){' '}
            <i className="fas f-14 ml-2 fa-angle-up"></i>
          </OpenModalBtn>
        </Portal>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  ids: state.multi_select_video.ids || [],
})

export default connect(mapStateToProps)(PrivateCollectionVideo)
