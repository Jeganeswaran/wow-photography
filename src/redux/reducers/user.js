import {USER, _UPDATE_DATA} from "../actions/constants";

//user reducer
const user = (state = {}, action) => {
    switch(action.type){
        case `${USER}${_UPDATE_DATA}`:
            return {...state, ...action.payload}
        default :
            return state
    }
}

export default user