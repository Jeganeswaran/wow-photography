import React, { useState } from 'react'
import GuideLines from './guidelines'
import List from '../common/list'
import Loader from '../common/loader'
import useHttp from '../../hooks/http/useHttp'
import { connect } from 'react-redux'
import { CATEGORIES, cat_url } from '../../redux/actions/constants'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import { photos_url } from '../../redux/actions/constants'
import { addToast, openModal } from '../../redux/actions/common'
import { addPhotoSuccess } from '../../redux/actions/user'
import LoadingBtn from '../common/loadingbtn'
import Progress from './progress'
import { Link } from 'react-router-dom'

const Contest = ({ fetching, data, dispatch }) => {
  //select category
  const [category, setCategory] = useState('')

  //location
  const [location, setLocation] = useState('')

  //caption
  const [caption, setCaption] = useState('')

  //camera_used
  const [camera_used, setCamera_used] = useState('')

  //terms
  const [terms, setTerms] = useState(false)

  //handle file
  const [photo, setPhoto] = useState(null)

  //load categories
  useHttp(dispatch, CATEGORIES, { url: cat_url }, 'categories')

  const { setReq, res } = useDataSubmit(
    (response) => {
      dispatch(addPhotoSuccess(response))
      setCategory('')
      setPhoto(null)
      setTerms(false)
      dispatch(addToast('Photo has been submited'))
      dispatch(openModal('REQPAY_MODAL', { photo: response, isContest: true }))
    },
    (response) => {
      dispatch(addToast(response, false))
    }
  )

  //handle file input change
  const handleSubmit = () => {
    //check if file size less than 20MB
    if (photo.size > 20971520) {
      dispatch(addToast('Image size must be less than 20MB', false))
      return
    }
    let postData = new FormData()
    postData.append('photo', photo)
    postData.append('categories_id', category)
    postData.append('camera_used', camera_used)
    if (location) {
      postData.append('location', location)
    }
    if (caption) {
      postData.append('caption', caption)
    }
    setReq((x) => ({
      ...x,
      count: x.count + 1,
      config: {
        url: photos_url,
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
          <div className="row flex-wrap">
            <div className="col-md-6 pr-md-2">
              <label
                className="image-upload-section flex-center text-center"
                htmlFor="addPhoto"
              >
                <div>
                  <input
                    id="addPhoto"
                    name="new_photo"
                    onChange={({ target }) => {
                      const files = target.files
                      if (files) {
                        setPhoto([...files][0])
                      }
                    }}
                    style={{ display: `none` }}
                    type="file"
                    accept="image/*"
                  />
                  <i className="fa fa-plus"></i>
                  <p>{photo ? 'Change' : 'Add new'} photograph</p>
                </div>
              </label>
            </div>
            <div className="col-md-6 pr-ml-2">
              <div className="image-upload-section flex-center text-center">
                {photo ? (
                  <img
                    className="img-preview"
                    src={URL.createObjectURL(photo)}
                    alt=""
                  />
                ) : (
                  <div>
                    <i className="fas fa-file-image"></i>
                    <p>Image Preview</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-group">
                <label className="f-14">Choose a Category</label>
                <select
                  // disabled={!photo}
                  value={category}
                  onChange={({ target }) => setCategory(target.value)}
                  className="form-control f-14"
                >
                  <List
                    RenderItem={({ name, id }) => (
                      <option value={id}>{name}</option>
                    )}
                    title="cats"
                    list={[{ id: '', name: 'Choose a Category' }, ...data]}
                  />
                </select>
              </div>
              <LabelIp
                label="Camera Used"
                value={camera_used}
                onChange={(val) => setCamera_used(val)}
              />
              <div className="row">
                <div className="col-md-6">
                  <LabelIp
                    label="Location (optional)"
                    value={location}
                    onChange={(val) => setLocation(val)}
                  />
                </div>
                <div className="col-md-6">
                  <LabelIp
                    label="Caption (optional)"
                    value={caption}
                    onChange={(val) => setCaption(val)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <GuideLines />
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
        {photo && res.fetching && (
          <div className="border p-2 mb-3">
            <p className="f-14 mb-0">{photo.name}</p>
            <small className="text-muted">
              {(photo.size / 1048576).toPrecision(2)}MB
            </small>
            <Progress />
          </div>
        )}
        {photo && res.data && (
          <div className="border p-2 mb-3">
            <p className="f-14 mb-0">{photo.name}</p>
            <small className="text-muted">
              {(photo.size / 1048576).toPrecision(2)}MB
            </small>
            <Progress complete />
          </div>
        )}
        <div className="d-flex justify-content-end align-items-end">
          <LoadingBtn
            disabled={category && photo && terms && camera_used ? false : true}
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
  type = 'text',
  value,
  onChange,
  disabled = false,
}) => (
  <div className="form-group">
    <label className="f-14">{label}</label>
    <input
      placeholder={`Enter ${label.replace('(optional)', '').toLowerCase()}`}
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

export const TextAreaIp = ({
  label,
  type = 'text',
  value,
  onChange,
  disabled = false,
  maxLength,
}) => (
  <div className="form-group">
    <label className="f-14">{label}</label>
    <textarea
      placeholder={`Enter ${label.replace('(optional)', '').toLowerCase()}`}
      className="form-control f-14"
      type={type}
      value={value}
      onChange={({ target }) => {
        onChange(target.value)
      }}
      disabled={disabled}
      row={4}
      maxLength={maxLength}
    ></textarea>
  </div>
)

const mapStateToProps = ({ categories }) => ({
  ...categories,
})

export default connect(mapStateToProps)(Contest)
