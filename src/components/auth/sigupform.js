import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';
import { register_url } from '../../redux/actions/constants';
import { addToast } from '../../redux/actions/common';
import { updateUser } from '../../redux/actions/user';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"


const inputs = [
    {
        inputProps: {
            name: "first_name",
            type: "text",
            value: '',
            placeholder: "Enter your First Name"
        }
    },
    {
        inputProps: {
            name: "last_name",
            type: "text",
            value: '',
            placeholder: "Enter your Last Name"
        }
    },
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
            placeholder: "Enter your Password"
        }
    },
];

const SignUpForm = ({ addToast, updateUser, history }) => {
    return (
        <RenderForm 
            RenderItem={FormGroup}
            inputs={inputs}
            title="signup-form"
            config={{
                url: register_url,
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
    addToast, updateUser
}

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm))