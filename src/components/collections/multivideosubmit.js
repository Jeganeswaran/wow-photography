import React, { useState } from 'react'
import List from '../common/list'
import { connect } from 'react-redux'
import { changeMultiVideo, addVideoSuccess } from '../../redux/actions/user'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import { addToast, closeModal } from '../../redux/actions/common'
import LoadingBtn from '../common/loadingbtn'
import { videos_url } from '../../redux/actions/constants'
import { Link } from 'react-router-dom'

const MultiVideoSubmit = ({
  list,
  master_values,
  changeMultiVideo,
  addVideoSuccess,
  addToast,
  closeModal,
  video_points,
}) => {
  //terms
  const [terms, setTerms] = useState(false)

  const { setReq, res } = useDataSubmit(
    (response) => {
      addVideoSuccess(response)
      closeModal()
    },
    (response) => {
      addToast(response, false)
    }
  )

  //handle file input change
  const handleSubmit = () => {
    //check if file size less than 20MB
    if (video_points < list.length) {
      addToast(`You have only ${video_points} credits`, false)
      return
    }

    let postData = list.reduce((acc, cur) => {
      return [...acc, { ...cur, video: cur.id, categories: cur.categories_id }]
    }, [])

    setReq((x) => ({
      ...x,
      count: x.count + 1,
      config: {
        url: videos_url + 'video_submit/',
        method: 'POST',
        data: postData,
      },
    }))
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-3" style={{ height: `60vh`, overflow: `auto` }}>
          <List
            list={list}
            RenderItem={(video_data) => {
              const { id, categories_id, camera_used, video } = video_data
              return (
                <div className="col-md-6">
                  <div className="multi-select-img mb-1">
                    {camera_used && <h5 className="f-600">{camera_used}</h5>}
                    {video && (
                      <p>
                        <a href={video}>{video}</a>
                      </p>
                    )}
                    <div className="flex-center">
                      <button
                        className="btn btn-a"
                        onClick={() => {
                          changeMultiVideo('_REMOVE', video_data)
                        }}
                      >
                        <i className="fas fa-trash color-white" />
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      value={categories_id}
                      className="form-control f-14"
                      onChange={({ target }) => {
                        changeMultiVideo('_UPDATE', {
                          id,
                          data: {
                            categories_id: parseInt(target.value, 10),
                          },
                        })
                      }}
                    >
                      <List
                        RenderItem={({ name, id }) => (
                          <option value={id}>{name}</option>
                        )}
                        title="cats-multi"
                        list={[...master_values.data.video_category]}
                      />
                    </select>
                  </div>
                </div>
              )
            }}
            title="multi"
          />
        </div>
      </div>
      <div className="">
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
        <p className="f-10 theme-red">
          Note: Video type and link cannot be changed after submission
        </p>
      </div>
      <LoadingBtn
        disabled={list.length === 0 || !terms}
        fetching={res.fetching}
        className="btn btn-theme float-right pr-4 pl-4"
        onClick={handleSubmit}
        title="Submit"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.multi_select_video.list,
  video_points: state.user.userprofile.video_points || 0,
})

const mapDispatchToProps = {
  changeMultiVideo,
  addVideoSuccess,
  addToast,
  closeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiVideoSubmit)
