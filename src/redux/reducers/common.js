import { OPEN_MODAL, CLOSE_MODAL, ADD_TOAST, REMOVE_TOAST, CLEAR_TOAST} from "../actions/constants";

//sigle modal reducer
export const modalReducer = (state = { open: false }, action) => {
    let { type, modalName, modalProps} = action;
    switch(type) {
        case OPEN_MODAL: 
            return {...state,open: true, modalName, modalProps}
        case CLOSE_MODAL: 
            return {...state,open: false}
        default:
            return state
    }
}

//n toast reducer
export const toast = (state=[], action) => {
    switch (action.type) {
        case ADD_TOAST:
            return [...state, action.payload]
        case REMOVE_TOAST:
            return state.filter(x => x.id !== action.id)
        case CLEAR_TOAST:
            return []
        default:
            return state;
    }
}