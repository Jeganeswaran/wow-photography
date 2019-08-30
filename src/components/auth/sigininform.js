import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';
import { login_url } from '../../redux/actions/constants';
import { addToast, closeModal } from '../../redux/actions/common';
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions/user';
import { withRouter } from "react-router-dom"

const client = Math.random() * 100000;

const inputs = [
    {
        inputProps: {
            name: "email",
            type: "email",
            value: '',
            placeholder: "Enter your Email"
        }
    },
    {
        inputProps: {
            name: "password",
            type: "password",
            value: '',
            placeholder: "Enter your password"
        }
    },
    {
        inputProps: {
            name: "client",
            type: "hidden",
            value: client
        }
    }
];

const SignInForm = ({ addToast, closeModal, updateUser, history }) => {
    return (
        <RenderForm
            RenderItem={FormGroup}
            inputs={inputs}
            title="signin-form"
            config={{
                url: login_url,
                method: "POST"
            }}
            succFunc={
                (data) => {
                    updateUser(data);
                    const isUp = data.userprofile.points === 0 && data.submitted_photo === 0 && data.private_photographs !== 0;
                    history.push(`/my-profile${isUp ? `/?action=Upgrade` : ''}`);
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

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
    addToast, closeModal, updateUser
}

export default withRouter(connect(null, mapDispatchToProps)(SignInForm))
