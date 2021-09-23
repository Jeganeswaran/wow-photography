import React, { useEffect } from 'react'
import ScrollList from '../common/scrollList'
import PublishCard from './publishcard'
import {
  PUBLISHED_COLLECTION,
  photos_url,
  PRIVATE_COLLECTION,
} from '../../redux/actions/constants'
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/http'
import { changeMulti } from '../../redux/actions/user'
import { Link } from 'react-router-dom'

const NoData = () => (
  <div className="col-md-12">
    <div className="p-5 flex-center flex-column border">
      <Link to="/my-profile/enter-to-contest/video" className="btn btn-theme">
        Enter to Contest
      </Link>
    </div>
  </div>
)

const CollectionListVideo = ({
  isSubmitted = false,
  changeMulti,
  ids,
  listData,
  objName,
  userId,
  loadData,
}) => {
  const type = isSubmitted ? PUBLISHED_COLLECTION : PRIVATE_COLLECTION

  const url = photos_url + (isSubmitted ? `?is_published=${isSubmitted}` : '')

  useEffect(() => {
    if (userId) {
      loadData(type, { url }, objName, { userId })
    }
  }, [userId, type])

  if (listData) {
    return (
      <>
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
        </div>
        <ScrollList
          RenderItem={(props) => (
            <div className="col-md-6">
              <PublishCard
                isSubmitted
                multiDispatch={changeMulti}
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
    state[ownProps.isSubmitted ? 'public_collection' : 'private_collection'][
      state.user.id
    ],
  objName:
    (ownProps.isSubmitted ? 'public_collection' : 'private_collection') +
    ' ' +
    state.user.id,
  userId: state.user.id,
  ids: state.multi_select.ids,
})

const mapDispatchToProps = {
  loadData,
  changeMulti,
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionListVideo)
