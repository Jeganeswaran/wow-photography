import { PRIVATE_COLLECTION, PUBLISHED_COLLECTION } from "../actions/constants";
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

