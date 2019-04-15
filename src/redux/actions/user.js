import { USER, _UPDATE_DATA, _CLEAR, PUBLISHED_COLLECTION, PRIVATE_COLLECTION } from "./constants";
import { addData, removeData } from "./http";

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
        let is_submitted = payload.is_submitted;
        if (is_submitted) {
            dispatch(addData(PUBLISHED_COLLECTION, [payload]));
            dispatch(removeData(PRIVATE_COLLECTION, payload.id));
        } else {
            dispatch(addData(PRIVATE_COLLECTION, [payload]));
        }
    }
} 