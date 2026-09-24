import { OPEN_MODAL, CLOSE_MODAL } from './constants'

//toast starts here
let toast_id = 1

//dummy async function for timeout
const asyncTimeOut = (timeOut) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved')
    }, timeOut)
  })

//add Toast
export const addToast = (text, success = true, timeout = 3000) => {
  const id = toast_id++
  return async (dispatch) => {
    dispatch(addToastMsg({ text, success, id }))
    await asyncTimeOut(timeout)
    dispatch(removeToast(id))
  }
}

//add toast message
export const addToastMsg = (payload) => {
  return {
    type: 'ADD_TOAST',
    payload,
  }
}

//remove toast
export const removeToast = (id) => {
  return {
    type: 'REMOVE_TOAST',
    id,
  }
}
//toast ends here

//modal actions
export const openModal = (modalName, modalProps = {}) => {
  return {
    type: OPEN_MODAL,
    modalName,
    modalProps,
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}
//modal actions ends here
