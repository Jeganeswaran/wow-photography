import {
  PRIVATE_COLLECTION,
  PUBLISHED_COLLECTION,
  MULTISELECT,
  MULTISELECTVIDEO,
  PRIVATE_VIDEO_COLLECTION,
  PUBLISHED_VIDEO_COLLECTION,
} from '../actions/constants'
import { httpResultsReducer } from './httpreducers'

//private collection
export const private_collection = (state = {}, action) => {
  if (action.userId) {
    return {
      ...state,
      [action.userId]: httpResultsReducer(PRIVATE_COLLECTION)(
        state[action.userId],
        action
      ),
    }
  } else {
    return state
  }
}

//published collection
export const public_collection = (state = {}, action) => {
  if (action.userId) {
    return {
      ...state,
      [action.userId]: httpResultsReducer(PUBLISHED_COLLECTION)(
        state[action.userId],
        action
      ),
    }
  } else {
    return state
  }
}

//private video collection
export const private_video_collection = (state = {}, action) => {
  if (action.userId) {
    return {
      ...state,
      [action.userId]: httpResultsReducer(PRIVATE_VIDEO_COLLECTION)(
        state[action.userId],
        action
      ),
    }
  } else {
    return state
  }
}

//published video collection
export const public_video_collection = (state = {}, action) => {
  if (action.userId) {
    return {
      ...state,
      [action.userId]: httpResultsReducer(PUBLISHED_VIDEO_COLLECTION)(
        state[action.userId],
        action
      ),
    }
  } else {
    return state
  }
}

//multiselect reducer
export const multi_select = (state = { ids: [], list: [] }, action) => {
  switch (action.type) {
    case MULTISELECT + '_ADD':
      return {
        ...state,
        ids: [action.payload.id, ...state.ids],
        list: [action.payload, ...state.list],
      }
    case MULTISELECT + '_REMOVE':
      return {
        ...state,
        ids: state.ids.filter((x) => x !== action.payload.id),
        list: state.list.filter((x) => x.id !== action.payload.id),
      }
    case MULTISELECT + '_UPDATE':
      return {
        ...state,
        list: state.list.map((x) => {
          if (x.id === action.payload.id) {
            return { ...x, ...action.payload.data }
          }
          return x
        }),
      }
    case MULTISELECT + '_CLEAR':
      return {
        ids: [],
        list: [],
      }
    default:
      return state
  }
}

//multiselectvideo reducer
export const multi_select_video = (state = { ids: [], list: [] }, action) => {
  switch (action.type) {
    case MULTISELECTVIDEO + '_ADD':
      return {
        ...state,
        ids: [action.payload.id, ...state.ids],
        list: [action.payload, ...state.list],
      }
    case MULTISELECTVIDEO + '_REMOVE':
      return {
        ...state,
        ids: state.ids.filter((x) => x !== action.payload.id),
        list: state.list.filter((x) => x.id !== action.payload.id),
      }
    case MULTISELECTVIDEO + '_UPDATE':
      return {
        ...state,
        list: state.list.map((x) => {
          if (x.id === action.payload.id) {
            return { ...x, ...action.payload.data }
          }
          return x
        }),
      }
    case MULTISELECTVIDEO + '_CLEAR':
      return {
        ids: [],
        list: [],
      }
    default:
      return state
  }
}
