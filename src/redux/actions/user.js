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
    return (dispatch, getState) => {
        const user = getState().user;
        const is_submitted = payload.is_submitted;
        const rest = { userId: user.id };
        if (is_submitted) {
            dispatch(addData(PUBLISHED_COLLECTION, [payload], rest));
            dispatch(removeData(PRIVATE_COLLECTION, payload.id, rest));
            dispatch(updateUser({
                private_photographs: user.private_photographs - 1,
                submitted_photo: user.submitted_photo + 1
            }));
        } else {
            dispatch(addData(PRIVATE_COLLECTION, [payload], rest));
            dispatch(updateUser({
                private_photographs: user.private_photographs + 1
            }));
        }
    }
} 