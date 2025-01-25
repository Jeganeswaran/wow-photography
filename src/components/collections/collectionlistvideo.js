import React, { useEffect } from 'react'
import ScrollList from '../common/scrollList'
import PublishCardVideo from './publishcardvideo'
import {
  videos_url,
  PUBLISHED_VIDEO_COLLECTION,
  PRIVATE_VIDEO_COLLECTION,
} from '../../redux/actions/constants'
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/http'
import { changeMultiVideo } from '../../redux/actions/user'
import { Link } from 'react-router-dom'
import { useCountdown } from '../../hooks/useCountdown'

const NoData = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date("Sept 26, 2024 20:00:00"));
  if (days + hours + minutes + seconds >= 0) {
  return(
  <div className="col-md-12">
    <div className="p-5 flex-center flex-column border">
      <Link to="/my-profile/enter-to-contest/video" className="btn btn-theme">
        Enter to Contest
      </Link>
    </div>
  </div>
  )
  }
  return <div></div>
}

const CollectionListVideo = ({
  isSubmitted = false,
  changeMultiVideo,
  ids,
  listData,
  objName,
  userId,
  loadData,
}) => {
  const type = isSubmitted
    ? PUBLISHED_VIDEO_COLLECTION
    : PRIVATE_VIDEO_COLLECTION

  const url = videos_url + (isSubmitted ? `?is_published=${isSubmitted}` : '')

  useEffect(() => {
    if (userId) {
      loadData(type, { url }, objName, { userId })
    }
  }, [userId, type])

  const [days, hours, minutes, seconds] = useCountdown(new Date("Sept 26, 2024 20:00:00"));

  if (listData) {
    return (
      <>
      { (days + hours + minutes + seconds >= 0) &&(
        <div className="col-md-12">
          <div className="text-right mb-2">
            <Link
              className="f-15 f-500 theme-red"
              to="/my-profile/enter-to-contest/video"
            >
              <i className="fa fa-plus f-14 mr-1"></i>
              Enter to contest
            </Link>
          </div>
        </div>)}
        <ScrollList
          RenderItem={(props) => (
            <div className="col-md-6">
              <PublishCardVideo
                isSubmitted
                multiDispatch={changeMultiVideo}
                ids={ids}
                {...props}
              />
            </div>
          )}
          type={type}
          listData={listData}
          objName={objName}
          NoData={NoData}
          rest={{ userId }}
        />
      </>
    )
  }
  return null
}

const mapStateToProps = (state, ownProps) => ({
  listData:
    state[
      ownProps.isSubmitted
        ? 'public_video_collection'
        : 'private_video_collection'
    ][state.user.id],
  objName:
    (ownProps.isSubmitted
      ? 'public_video_collection'
      : 'private_video_collection') +
    ' ' +
    state.user.id,
  userId: state.user.id,
  ids: state.multi_select_video.ids,
})

const mapDispatchToProps = {
  loadData,
  changeMultiVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionListVideo)
