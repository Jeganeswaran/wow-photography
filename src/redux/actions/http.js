import { _SET_CACHE, _CLEAR, _ADD_DATA, _REMOVE_DATA } from "./constants";

// load data
export const loadData = (type, payload, objName, rest = {}) => ({
    isHttp: true,
    type,
    payload,
    objName,
    ...rest
})

//update cache
export const setCache = (name, payload = false, rest = {}) => ({
    type: name + _SET_CACHE,
    payload,
    ...rest
})

//load more
export const loadMore = (name, payload, objName, rest = {}) => {
    return (dispatch) => {
        dispatch(setCache(name, false, rest))
        dispatch(loadData(name, payload, objName, rest))
    }
}

//clear list
export const clearData = (name, rest = {}) => ({
    type: name + _CLEAR,
    ...rest
})

//add data
export const addData = (name, payload = [], rest = {}) => ({
    type: name + _ADD_DATA,
    payload,
    ...rest
})

//remove data
export const removeData = (name, id, ...rest) => ({
    type: name + _REMOVE_DATA,
    id,
    ...rest
})