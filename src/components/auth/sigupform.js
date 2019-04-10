import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';
import { register_url } from '../../redux/actions/constants';
import { addToast, closeModal } from '../../redux/actions/common';
import { connect } from 'react-redux'

const inputs = [
    {
        inputProps: {
            name: "First Name",
            type: "text",
            value: '',
            placeholder: "Enter your First Name"
        }
    },
    {
        inputProps: {
            name: "Last Name",
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

const SignUpForm = ({ addToast, closeModal }) => {
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
                    addToast("Activation mail has been sent to Email Id")
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

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
    addToast, closeModal
}

export default connect(null, mapDispatchToProps)(SignUpForm)