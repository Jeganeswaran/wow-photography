import { _SET_CACHE, _CLEAR, _ADD_DATA, _REMOVE_DATA } from "./constants";

// load data
export const loadData = (type, payload, objName = "") => ({
    isHttp: true,
    type,
    payload,
    objName
})

//update cache
export const setCache = (name, payload = false) => ({
    type: name + _SET_CACHE,
    payload
})

//clear list
export const clearData = (name) => ({
    type: name + _CLEAR
})

//add data
export const addData = (name, payload = []) => ({
    type: name + _ADD_DATA,
    payload
})

//remove data
export const removeData = (name, id) => ({
    type: name + _REMOVE_DATA,
    id
})