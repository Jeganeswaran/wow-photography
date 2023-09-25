import { _FETCHING, _FULFILLED, _REJECTED, _CLEAR, _ADD_DATA, _REMOVE_DATA, _UPDATE_DATA, _SET_CACHE } from "../actions/constants";

//intial httpObject
const httpObjectInitial = {
    fetching: false, data: {}, error: false, cached: false
};

//intial httpObject
const httpArrayInitial = {
    fetching: null, data: [], error: false
};

//intial httpObject
const httpArrayInitialCache = {
    fetching: null, data: [], error: false, cached: false
};

//intial httpResultsReducer
const resultsIntial = {
    fetching: null,
    data: [],
    error: false,
    count: null,
    next: null,
    prev: null,
    cached: null
};

//create http reducer function
export const httpObjectReducer = (name) => {
    return (state = httpObjectInitial, action) => {
        switch (action.type) {
            case `${name}${_FETCHING}`:
                return {
                    ...state,
                    fetching: true,
                    error: false
                }
            case `${name}${_FULFILLED}`:
                return {
                    ...state,
                    fetching: false,
                    data: action.payload,
                    cached: true
                }
            case `${name}${_REJECTED}`:
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            case `${name}${_CLEAR}`:
                return { ...state, ...httpObjectInitial }
            default:
                return state
        }
    }
}

//create http reducer function
export const httpArrayReducer = (name) => {
    return (state = httpArrayInitial, action) => {
        switch (action.type) {
            case `${name}${_FETCHING}`:
                return {
                    ...state,
                    fetching: true,
                    error: false
                }
            case `${name}${_FULFILLED}`:
                return {
                    ...state,
                    fetching: false,
                    data: action.payload
                }
            case `${name}${_REJECTED}`:
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            case `${name}${_UPDATE_DATA}`:
                return {
                    ...state,
                    data: state.data.map(x => {
                        if (x.id === action.id) {
                            return { ...x, ...action.payload }
                        }
                        return x;
                    })
                }
            case `${name}${_CLEAR}`:
                return { ...state, ...httpArrayInitial }
            default:
                return state
        }
    }
}

//create http reducer function
export const httpArrayReducerCache = (name) => {
    return (state = httpArrayInitialCache, action) => {
        switch (action.type) {
            case `${name}${_FETCHING}`:
                return {
                    ...state,
                    fetching: true,
                    error: false,
                    cached: false
                }
            case `${name}${_FULFILLED}`:
                return {
                    ...state,
                    fetching: false,
                    data: action.payload,
                    cached: true
                }
            case `${name}${_REJECTED}`:
                return {
                    ...state,
                    fetching: false,
                    error: action.payload,
                    cached: false
                }
            case `${name}${_UPDATE_DATA}`:
                return {
                    ...state,
                    data: state.data.map(x => {
                        if (x.id === action.id) {
                            return { ...x, ...action.payload }
                        }
                        return x;
                    })
                }
            case `${name}${_CLEAR}`:
                return { ...state, ...httpArrayInitialCache }
            default:
                return state
        }
    }
}

export const httpResultsReducer = (name) => {
    return (state = resultsIntial, action) => {
        switch (action.type) {
            case `${name}${_FETCHING}`:
                return {
                    ...state,
                    fetching: true,
                    error: false
                }
            case `${name}${_FULFILLED}`:
                return {
                    ...state,
                    fetching: false,
                    data: state.cached === null ?
                        action.payload.results :
                        state.data.concat(action.payload.results),
                    count: action.payload.count,
                    next: action.payload.next,
                    prev: action.payload.prev,
                    cached: true
                }
            case `${name}${_REJECTED}`:
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            case `${name}${_ADD_DATA}`:
                return {
                    ...state,
                    data: [...action.payload, ...state.data]
                }
            case `${name}${_REMOVE_DATA}`:
                return {
                    ...state,
                    data: state.data.filter(x => x.id !== action.id)
                }
            case `${name}${_SET_CACHE}`:
                return {
                    ...state,
                    cached: action.payload
                }
            case `${name}${_CLEAR}`:
                return { ...state, ...resultsIntial }
            default:
                return state
        }
    }
}