import { MY_COLLECTION, _FETCHING, _FULFILLED, _REJECTED } from "../actions/constants";

//my collections reducer
const my_collection = (state = {
    fetching: false,
    priv: [], submitted: [],
    error: false,
    cached: false,
}, action) => {
    switch (action.type) {
        case MY_COLLECTION + _FETCHING:
            return {
                ...state,
                fetching: true,
                error: false,
                cached: false
            }
        case MY_COLLECTION + _FULFILLED:
            return {
                ...state,
                fetching: false,
                priv: state.priv.concat(action.payload.private),
                submitted: state.submitted.concat(action.payload.submitted),
                cached: true
            }
        case MY_COLLECTION + _REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload,
                cached: false
            }
        default:
            return state
    }
}

export default my_collection