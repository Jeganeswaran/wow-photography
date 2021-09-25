import React, { useState } from 'react'
import List from '../common/list'
import Loader from '../common/loader'
import useHttp from '../../hooks/http/useHttp'
import { connect } from 'react-redux'
import { MASTER_VALUES, master_url } from '../../redux/actions/constants'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import { videos_url } from '../../redux/actions/constants'
import { addToast, openModal } from '../../redux/actions/common'
import { addVideoSuccess } from '../../redux/actions/user'
import LoadingBtn from '../common/loadingbtn'
import { Link } from 'react-router-dom'

const ContestVideo = ({ fetching, data, dispatch }) => {
  //select category
  const [category, setCategory] = useState('')

  //video
  const [video, setVideo] = useState('')

  //caption
  const [caption, setCaption] = useState('')

  //camera_used
  const [camera_used, setCamera_used] = useState('')

  //terms
  const [terms, setTerms] = useState(false)

  //load categories
  useHttp(dispatch, MASTER_VALUES, { url: master_url }, 'master_values')

  const { setReq, res } = useDataSubmit(
    (response) => {
      dispatch(addVideoSuccess(response))
      setCategory('')
      setVideo('')
      setCaption('')
      setCamera_used('')
      setTerms(false)
      dispatch(addToast('Video has been submited'))
      dispatch(
        openModal('REQPAYVIDEO_MODAL', { video: response, isContest: true })
      )
    },
    (response) => {
      dispatch(addToast(response, false))
    }
  )

  //handle file input change
  const handleSubmit = () => {
    let postData = new FormData()
    postData.append('categories_id', category)
    postData.append('camera_used', camera_used)
    postData.append('video', video)
    if (caption) {
      postData.append('caption', caption)
    }
    setReq((x) => ({
      ...x,
      count: x.count + 1,
      config: {
        url: videos_url,
        method: 'POST',
        data: postData,
        crossDomain: true,
        contentType: false,
        processData: true,
      },
    }))
  }

  if (fetching) {
    return (
      <div className="w-100 pt-3 pb-3 flex-grow-1 flex-center">
        <Loader width="30px" height="30px" />
      </div>
    )
  }
  if (data && data.length > 0) {
    return (
      <div className="pt-3">
        <div className="pb-2">
          <h5 className="f-700">Video Submission</h5>
          <h6 className="mt-2">Theme: Journey into Tamil Nadu</h6>
          <div className="row flex-wrap">
            <div className="col-md-12 mt-3">
              <div className="form-group">
                <label className="f-14">Video Type</label>
                <select
                  value={category}
                  onChange={({ target }) => setCategory(target.value)}
                  className="form-control f-14"
                >
                  <List
                    RenderItem={({ name, id }) => (
                      <option value={id}>{name}</option>
                    )}
                    title="cats"
                    list={[{ id: '', name: 'Choose a type' }, ...data]}
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
            </div>
          </div>
        </div>
        <div className="pb-2">
          <p className="theme-red mb-2 f-14">Guidelines to submit video</p>
          <ol className="guidelines pl-4">
            <li>Videos should be in MP4 Format.</li>
            <li>
              The submitted clips must be minimum 1 minute and maximum 3
              minutes.
            </li>
            <li>Submissions exceeding 3 minutes may be disqualified.</li>
            <li>
              Videos must be uploaded as one single file in the highest quality
              (minimum of HD 1080 and maximum of 4K quality).
            </li>
            <li>
              We request all the video files in MP4 format uploaded in any of
              the below mentioned platforms and Submit only the link in your{' '}
              <a href="https://wowtamilnadu.com/">wowtamilnadu.com</a> video
              section.
              <p className="mt-2 mb-2">Accepted downloadable links from:</p>
              <ul>
                <li>
                  <a href="http://wetransfer.com">Wetransfer.com</a>
                </li>
                <li>
                  <a href="http://sendbigfiles.com/">Sendbigfiles.com</a>
                </li>
                <li>
                  <a href="http://transferbigfiles.com/">
                    Transferbigfiles.com
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </div>
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
        <div className="d-flex justify-content-end align-items-end">
          <LoadingBtn
            disabled={category && video && terms && camera_used ? false : true}
            className="btn btn-theme pl-4 pr-4"
            fetching={res.fetching}
            title={'Submit'}
            onClick={handleSubmit}
          />
        </div>
      </div>
    )
  }
  return null
}

export const LabelIp = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled = false,
}) => (
  <div className="form-group">
    <label className="f-14">{label}</label>
    <input
      placeholder={
        placeholder
          ? placeholder
          : `Enter ${label.replace('(optional)', '').toLowerCase()}`
      }
      className="form-control f-14"
      type={type}
      value={value}
      onChange={({ target }) => {
        onChange(target.value)
      }}
      disabled={disabled}
    />
  </div>
)

const mapStateToProps = ({ master_values }) => ({
  data: master_values.data.video_category,
})

export default connect(mapStateToProps)(ContestVideo)
