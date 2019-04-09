import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';

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

const SignUpForm = () => {
    return (
        <RenderForm 
            RenderItem={FormGroup}
            inputs={inputs}
            title="signup-form"
        />
    )
}

export default SignUpForm