import React from 'react'
import ModalLayout from './modallayout';
import delimg from "../../assets/img/information.png"

//modal name USER_NOTIFY
const UserNotifyModal = ({title="Login Notification", content="Thank you for signing up. Check your email for activation link. If not received, kindly check your spam folder."}) => {
    return (
        <ModalLayout title={title}>
           <div className="flex-center flex-column text-center">
                <img className="mb-3" src={delimg} alt="" />
            </div>
            <div className="my-4 text-center montserrat">
                {content}
            </div>
        </ModalLayout>
    )
}

export default UserNotifyModal
