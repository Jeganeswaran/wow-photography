import React from 'react'
import RenderForm from '../form/renderform';
import FormGroup from '../form/formgroup';
import { contact_url } from '../../redux/actions/constants';
import { addToast } from '../../redux/actions/common';
import { connect } from 'react-redux'

const inputs = [
    {
        inputProps: {
            name: "name",
            type: "text",
            value: '',
            placeholder: "Enter your full name"
        }
    },
    {
        inputProps: {
            name: "email",
            type: "email",
            value: '',
            placeholder: "Enter your email"
        }
    },
    {
        inputProps: {
            name: "message",
            type: "textarea",
            value: '',
            placeholder: "Enter your message"
        }
    },
];

const ContactUs = ({ addToast }) => {
    return (
        <RenderForm
            RenderItem={FormGroup}
            inputs={inputs}
            title="contact-form"
            config={{
                url: contact_url,
                method: "POST"
            }}
            succFunc={
                (data) => {
                    addToast("Message sent successfully. You will be contacted shortly")
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
    addToast
}

export default connect(null, mapDispatchToProps)(ContactUs)