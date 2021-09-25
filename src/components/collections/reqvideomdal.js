import React, { useState } from 'react'
import List from '../common/list'
import { Link } from 'react-router-dom'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import LoadingBtn from '../common/loadingbtn'
import { videos_url } from '../../redux/actions/constants'
import { LabelIp } from './contest'

const RequestVideoModal = ({
  video: submittedVideo,
  master_values,
  isContest,
  user,
  addVideoSuccess,
  addToast,
  closeModal,
}) => {
  //terms
  const [terms, setTerms] = useState(false)

  //video
  const [video, setVideo] = useState(submittedVideo.video || '')

  //caption
  const [caption, setCaption] = useState(submittedVideo.caption || '')

  //camera_used
  const [camera_used, setCamera_used] = useState(
    submittedVideo.camera_used || ''
  )

  //select category
  const [category, setCategory] = useState(submittedVideo.categories_id || '')

  const { res, setReq } = useDataSubmit(
    (data) => {
      addVideoSuccess(data)
      closeModal()
      addToast('Video Submitted')
    },
    (data) => {
      addToast(data, false)
    }
  )

  return (
    <div className="container-fluid w-100">
      <div className="form-group">
        <label className="f-14">Video Type</label>
        <select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          className="form-control f-14"
        >
          <List
            RenderItem={({ name, id }) => <option value={id}>{name}</option>}
            title="cats"
            list={[
              { id: '', name: 'Change type' },
              ...master_values.data.video_category,
            ]}
          />
        </select>
      </div>
      <LabelIp
        label="Title"
        value={camera_used}
        onChange={(val) => setCamera_used(val)}
      />
      <LabelIp
        label="Video Link"
        placeholder="Only downloadable file links are allowed"
        value={video}
        onChange={(val) => setVideo(val)}
      />
      <LabelIp
        label="Video Description (optional)"
        placeholder="Tell about your video like location, shooting rigs used etc.,"
        value={caption}
        onChange={(val) => setCaption(val)}
      />
      <div className="d-flex align-items-center form-group mb-2">
        <input
          type="checkbox"
          id="termsIp"
          checked={terms}
          className="mr-2"
          onChange={() => {
            setTerms((term) => !term)
          }}
        />
        <span className="f-14 d-flex align-items-center">
          I agree to all{' '}
          <Link
            className="theme-red ml-1"
            to="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Terms & Conditions{' '}
          </Link>
        </span>
      </div>
      <p className="f-12 mb-1">
        You have {user.userprofile.video_points} points left.
      </p>
      <p className="f-10 theme-red">
        Note: Video type and link cannot be changed after submission
      </p>
      {user.userprofile && user.userprofile.video_points ? (
        <div className="form-group">
          <LoadingBtn
            disabled={category && video && terms && camera_used ? false : true}
            fetching={res.fetching}
            className="btn btn-theme btn-block"
            title="Submit"
            onClick={() => {
              setReq((x) => ({
                ...x,
                count: x.count + 1,
                config: {
                  url: videos_url + 'video_submit/',
                  method: 'POST',
                  data: [
                    {
                      categories: category,
                      location: video,
                      video: submittedVideo.id,
                      camera_used,
                      caption,
                    },
                  ],
                },
              }))
            }}
          />
        </div>
      ) : (
        <div className="form-group">
          <Link to="/upgrade" className="btn btn-theme btn-block">
            Pay and Submit
          </Link>
        </div>
      )}
      {isContest && (
        <div className="form-group">
          <Link
            to="/my-profile/enter-to-contest/video"
            className="btn f-14 btn-primary btn-block"
          >
            Add more videos
          </Link>
        </div>
      )}
      {isContest && (
        <div className="form-group">
          <Link
            to="/my-profile/private-videos"
            className="btn f-14 btn-danger btn-block"
          >
            Submit Later
          </Link>
        </div>
      )}
    </div>
  )
}

export default RequestVideoModal
