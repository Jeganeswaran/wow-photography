import {USER, _UPDATE_DATA, _CLEAR} from "../actions/constants";

//user reducer
const user = (state = {}, action) => {
    switch(action.type){
        case `${USER}${_UPDATE_DATA}`:
            return {...state, ...action.payload}
        case `${USER}${_CLEAR}`:
            return {}
        default :
            return state
    }
}

export default user