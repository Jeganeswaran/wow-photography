import React from 'react'
import Changepwd from '../auth/changepwd';
import ModalLayout from './modallayout';

//modal name: CHANGEPWD_MODAL
const ChangePwdModal = () => {
    return (
        <ModalLayout
            title="Change Password"
            children={<Changepwd />}
        />
    )
}

export default ChangePwdModal