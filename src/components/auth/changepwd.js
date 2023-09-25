import React from 'react'
import FormGroup from '../form/formgroup';
import { changepwd_url } from '../../redux/actions/constants';
import { addToast, closeModal } from '../../redux/actions/common';
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions/user';
import RenderForm from '../form/renderform';
import { getValByName } from '../../utils/forms/validation';

const inputs = [
    {
        inputProps: {
            name: "password",
            type: "password",
            value: '',
            placeholder: "Enter your new password"
        }
    },
    {
        customValid: (list, value) => {
            const pwd = getValByName(list, "password");
            if(pwd === value){
                return ""
            }
            return "Passwords do not match"
        },
        reduceTo: () => ({}),
        inputProps: {
            name: "retype_password",
            type: "password",
            value: '',
            placeholder: "Retype new password"
        }
    },
];


const ChangePwd = ({ addToast, closeModal, isUpdated }) => {
    return (
        <RenderForm
            RenderItem={FormGroup}
            inputs={isUpdated ? [
                {
                    inputProps: {
                        name: "current_password",
                        type: "password",
                        value: '',
                        placeholder: "Enter your old password"
                    }
                },
                ...inputs
            ] : inputs}
            title="change-form"
            config={{
                url: changepwd_url,
                method: "POST"
            }}
            succFunc={
                (data) => {
                    updateUser(data);
                    closeModal();
                }
            }
            errFunc={
                (data) => {
                    addToast(data, false);
                }
            }
        />
    )
}

const mapStateToProps = ({ user }) => ({
    isUpdated: user.userprofile && user.userprofile.is_update
})

const mapDispatchToProps = {
    addToast, closeModal, updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePwd)
