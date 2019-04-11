import { USER, _UPDATE_DATA, _CLEAR, MY_COLLECTION, _FULFILLED } from "./constants";
const isHttp = true;

//update user
export const updateUser = (payload) => ({
    type: `${USER}${_UPDATE_DATA}`,
    payload
})

//Clear user
export const clearUser = (payload) => ({
    type: `${USER}${_CLEAR}`,
    payload
})

//load collections
export const loadCollections = () => ({
    isHttp,
    type:"MY_COLLECTION", 
    payload: {
        url: "photos/",
    }, 
    objName: 'my_collection'
})

//add photo success
export const addPhotoSuccess = (payload) => ({
    type: MY_COLLECTION + _FULFILLED,
    payload
})