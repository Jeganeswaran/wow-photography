import { USER, _UPDATE_DATA, _CLEAR, PUBLISHED_COLLECTION, PRIVATE_COLLECTION, photos_url, profile_url, MULTISELECT } from "./constants";
import { loadData, clearData } from "./http";
import apiInstance from "../apiInstance";

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

//load user details
export const loadUser = () => {
    return dispatch => {
        apiInstance({
            url: profile_url
        }).then((res) => {
            dispatch(updateUser(res.data));
        })
    }
}

export const changeMulti = (type, payload) => ({
    type: MULTISELECT +  type,
    payload
})

//add photo success
export const addPhotoSuccess = () => {
    return (dispatch, getState) => {
        const { id } = getState().user;
        const rest = { userId: id };
        dispatch(loadUser());
        dispatch(clearData(PUBLISHED_COLLECTION, rest));
        dispatch(clearData(PRIVATE_COLLECTION, rest));
        dispatch(loadData(PUBLISHED_COLLECTION, { url: photos_url + "?is_published=true" }, `public_collection ${id}`, rest));
        dispatch(loadData(PRIVATE_COLLECTION, { url: photos_url }, `private_collection ${id}`, rest));
    }
} 