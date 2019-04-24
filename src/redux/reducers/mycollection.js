import { PRIVATE_COLLECTION, PUBLISHED_COLLECTION, MULTISELECT } from "../actions/constants";
import { httpResultsReducer } from "./httpreducers";

//private collection
export const private_collection = (state = {}, action) => {
    if (action.userId) {
        return {
            ...state,
            [action.userId]: httpResultsReducer(PRIVATE_COLLECTION)(
                state[action.userId],
                action
            )
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
            )
        }
    } else {
        return state
    }
}


//multiselect reducer
export const multi_select = (state = { ids: [], list: [] }, action) => {
    switch (action.type) {
        case MULTISELECT + "_ADD":
            return {
                ...state,
                ids: [action.payload.id, ...state.ids],
                list: [action.payload, ...state.list]
            }
        case MULTISELECT + "_REMOVE":
            return {
                ...state,
                ids: state.ids.filter(x => x !== action.payload.id),
                list: state.list.filter(x => x.id !== action.payload.id)
            }
        case MULTISELECT + "_UPDATE":
            return {
                ...state,
                list: state.list.map(x => {
                    if (x.id === action.id) {
                        return { ...x, ...action.payload }
                    }
                    return x
                })
            }
        case "CLEAR":
            return {
                ids: [],
                list: []
            }
        default:
            return state
    }
}