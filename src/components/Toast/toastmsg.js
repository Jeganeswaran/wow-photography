import React from 'react'

const ToastMsg = ({ success, text }) => (
    <div className={`toast toast-${success ? "success" : "error"} toast-in toast-out`}>
        <p className="m-0">{text}</p>
    </div>
)

export default ToastMsg