import { USER, _UPDATE_DATA, _CLEAR, MY_COLLECTION, _FULFILLED } from "./constants";

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

//add photo success
export const addPhotoSuccess = (payload) => {
    return dispatch => {
        dispatch({
            type: MY_COLLECTION + _FULFILLED,
            payload
        });
        dispatch(updateUser({
            private_photographs: payload.private_collection.length,
            submitted_photo: payload.submitted.length
        }));
    }
} 