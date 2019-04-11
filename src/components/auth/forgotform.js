import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';
import { forgot_url } from '../../redux/actions/constants';
import { addToast, closeModal } from '../../redux/actions/common';
import { connect } from 'react-redux'

const inputs = [
    {
        inputProps: {
            name: "email",
            type: "email",
            value: '',
            placeholder: "Enter your Email"
        }
    },
];

const ForgotForm = ({ addToast, closeModal }) => {
    return (
        <RenderForm
            RenderItem={FormGroup}
            inputs={inputs}
            title="forgot-form"
            config={{
                url: forgot_url,
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

export default connect(null, mapDispatchToProps)(ForgotForm)