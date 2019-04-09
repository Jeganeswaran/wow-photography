import React from 'react'
import { connect } from 'react-redux'
import Portal from '../common/portal';
import { removeToast } from "../../redux/actions/common"
import ToastMsg from './toastmsg'

const ToastContainer = ({toast, removeToast}) => {
    console.log(toast);
    return (
        <Portal>
            <div className="toast-container">
                {
                    toast.map(t =>
                        <ToastMsg {...t} remove={removeToast} key={`toast-${t.id}`} />
                    )
                }
            </div>
        </Portal>
    )
}

const mapStateToProps = ({ toast }) => ({
    toast
})

const mapDispatchToProps = {
    removeToast
}

const Toast = connect(mapStateToProps, mapDispatchToProps)(ToastContainer);

export default Toast




