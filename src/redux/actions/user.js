import {
  USER,
  _UPDATE_DATA,
  _CLEAR,
  PUBLISHED_COLLECTION,
  PRIVATE_COLLECTION,
  photos_url,
  videos_url,
  profile_url,
  MULTISELECT,
  PUBLISHED_VIDEO_COLLECTION,
  PRIVATE_VIDEO_COLLECTION,
  MULTISELECTVIDEO,
} from './constants'
import { loadData, clearData } from './http'
import apiInstance from '../apiInstance'

//update user
export const updateUser = (payload) => ({
  type: `${USER}${_UPDATE_DATA}`,
  payload,
})

// logout user
export const logOutUser = () => {
  return (dispatch, getState) => {
    const { id } = getState().user
    const rest = { userId: id }
    dispatch(clearUser())
    dispatch(changeMulti('_CLEAR'))
    dispatch(clearData(PUBLISHED_COLLECTION, rest))
    dispatch(clearData(PRIVATE_COLLECTION, rest))
  }
}

//Clear user
export const clearUser = () => ({
  type: `${USER}${_CLEAR}`,
})

//load user details
export const loadUser = () => {
  return (dispatch) => {
    apiInstance({
      url: profile_url,
    }).then((res) => {
      dispatch(updateUser(res.data))
    })
  }
}

export const changeMulti = (type, payload) => ({
  type: MULTISELECT + type,
  payload,
})

export const changeMultiVideo = (type, payload) => ({
  type: MULTISELECTVIDEO + type,
  payload,
})

//add photo success
export const addPhotoSuccess = () => {
  return (dispatch, getState) => {
    const { id } = getState().user
    const rest = { userId: id }
    dispatch(loadUser())
    dispatch(changeMulti('_CLEAR'))
    dispatch(clearData(PUBLISHED_COLLECTION, rest))
    dispatch(clearData(PRIVATE_COLLECTION, rest))
    dispatch(
      loadData(
        PUBLISHED_COLLECTION,
        { url: photos_url + '?is_published=true' },
        `public_collection ${id}`,
        rest
      )
    )
    dispatch(
      loadData(
        PRIVATE_COLLECTION,
        { url: photos_url },
        `private_collection ${id}`,
        rest
      )
    )
  }
}

//add video success
export const addVideoSuccess = () => {
  return (dispatch, getState) => {
    const { id } = getState().user
    const rest = { userId: id }
    dispatch(loadUser())
    dispatch(changeMulti('_CLEAR'))
    dispatch(clearData(PUBLISHED_VIDEO_COLLECTION, rest))
    dispatch(clearData(PRIVATE_VIDEO_COLLECTION, rest))
    dispatch(
      loadData(
        PUBLISHED_VIDEO_COLLECTION,
        { url: videos_url + '?is_published=true' },
        `public_video_collection ${id}`,
        rest
      )
    )
    dispatch(
      loadData(
        PRIVATE_VIDEO_COLLECTION,
        { url: videos_url },
        `private_video_collection ${id}`,
        rest
      )
    )
  }
}
