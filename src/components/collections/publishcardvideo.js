import React from 'react'
import { OpenModalBtn } from '../modals/modalbtns'
import dateFormat from '../../utils/dateFormat'

const PublishCardVideo = ({ ids, multiDispatch, ...props }) => {
  const {
    is_submitted,
    id,
    submitted_on,
    is_approved,
    categories,
    video,
    camera_used,
    caption,
  } = props
  const isSelected = ids.includes(id)
  return (
    <div className="bg-light">
      <div className="post">
        <div className="post-img-holder relative">
          {camera_used && <h5 className="f-600">{camera_used}</h5>}
          {video && (
            <div className="mb-3">
              <a href={video}>{video}</a>
            </div>
          )}
          {caption && <i>{caption}</i>}
          {is_submitted ? null : multiDispatch ? (
            <button
              className={`btn select-round ${
                isSelected ? `select-round-active` : ``
              }`}
              onClick={() =>
                multiDispatch(isSelected ? '_REMOVE' : '_ADD', props)
              }
            >
              {isSelected && (
                <span>
                  <i className="fas fa-check"></i>
                </span>
              )}
            </button>
          ) : null}
        </div>
        {is_submitted ? (
          <div className="flex-between p-2 align-items-center">
            <div>
              {is_approved ? (
                <span className="approv-pill bg-success">Approved</span>
              ) : is_approved === false ? (
                <RejectInfo />
              ) : (
                <span className="approv-pill pendibg-bg">Pending Approval</span>
              )}
            </div>
            <div className="text-right f-12">
              <div className="f-600">{categories}</div>
              <div style={{ color: `#737373` }}>
                {submitted_on ? dateFormat(submitted_on) : ''}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-between p-2 align-items-center">
            <OpenModalBtn
              modalName="DELETEVIDEO_MODAL"
              modalProps={{ id }}
              className="btn f-14 btn-light theme-red btn-danger"
            >
              Delete
            </OpenModalBtn>
            <OpenModalBtn
              modalName="PUBLISHVIDEO_MODAL"
              modalProps={{ id }}
              className="btn btn-a f-15 f-600"
            >
              {categories} <i className="fas f-14 fa-angle-down"></i>
            </OpenModalBtn>
            <OpenModalBtn
              modalName="REQPAYVIDEO_MODAL"
              modalProps={{ video: props }}
              className="btn btn-theme"
            >
              Submit
            </OpenModalBtn>
          </div>
        )}
      </div>
    </div>
  )
}

const RejectInfo = () => (
  <OpenModalBtn
    modalName="REJECTINFO_MODAL"
    className="btn-a approv-pill bg-danger"
    modalProps={{
      content: (
        <p>
          Your video is rejected. Please upload another video link to replace
          it.
        </p>
      ),
    }}
  >
    Rejected
    <i className="f-12 fa-info-circle fas ml-2"></i>
  </OpenModalBtn>
)

export default PublishCardVideo
