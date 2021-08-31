import React, { useEffect } from 'react'
// import useDataSubmit from '../../hooks/http/useDataSubmit';
import { urlParams } from '../../utils/urlParams';
import Pagelayout from '../common/pagelayout';
import FormGroup from '../form/formgroup';
import { Redirect } from "react-router-dom"
import { resetpwd_url } from '../../redux/actions/constants';
import icon from "../../assets/img/correct.png"
import { addToast } from '../../redux/actions/common';
import { connect } from 'react-redux'
import { updateUser, clearUser } from '../../redux/actions/user';
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
            if (pwd === value) {
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


const ResetPwd = ({ isToken, location, history, updateUser, clearUser, addToast }) => {

    useEffect(() => {
        if (isToken) {
            clearUser();
        }
    }, [])

    if (!location.search) {
        return <Redirect to="/" />
    }
    const { uid, token } = urlParams(location.search);
    if (!uid && !token) {
        return <Redirect to="/" />
    }
    return (
        <Pagelayout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 pb-5">
                        <div className="p-4 mt-3 mb-5 border">
                            <div className="text-center">
                                <img src={icon} className="mb-3" alt="" />
                                <h4>Reset Password</h4>
                                <p className="text-center">
                                    You have landed on the Reset password page.<br></br>
                                </p>
                            </div>
                            <RenderForm
                                RenderItem={FormGroup}
                                inputs={inputs}
                                title="change-form"
                                config={{
                                    url: resetpwd_url,
                                    method: "POST",
                                    data: {
                                        uid, token, client: Math.random() * 1000
                                    }
                                }}
                                succFunc={
                                    (data) => {
                                        updateUser(data);
                                        history.replace("/my-profile");
                                    }
                                }
                                errFunc={
                                    (data) => {
                                        addToast(data, false);
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        </Pagelayout>
    )
}

const mapStateToProps = ({ user }) => ({
    isToken: user && user.token
})

const mapDispatchToProps = {
    addToast, updateUser, clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPwd)