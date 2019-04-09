import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';

const inputs = [
    {
        inputProps: {
            name: "Email",
            type: "email",
            value: '',
            placeholder: "Enter your Email"
        }
    },
];

const ForgotForm = () => {
    return (
        <RenderForm
            RenderItem={FormGroup}
            inputs={inputs}
            title="forgot-form"
        />
    )
}

export default ForgotForm