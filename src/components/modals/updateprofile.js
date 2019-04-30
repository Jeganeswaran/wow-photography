import React from 'react'
import Address from '../auth/address';
import { MASTER_VALUES, master_url } from '../../redux/actions/constants';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import CenterLoader from './centerloader';
import ModalLayout from './modallayout';

const inputs = (con, address, user) => [
    {
        label: "First Name",
        inputProps: {
            name: "first_name",
            type: "text",
            value: user.first_name || '',
            placeholder: "Enter your first name"
        }
    },
    {
        label: "Last Name",
        inputProps: {
            name: "last_name",
            type: "text",
            value: user.last_name || '',
            placeholder: "Enter your last name"
        }
    },
    {
        label: "Email",
        inputProps: {
            name: "email",
            type: "email",
            value: user.email || '',
            placeholder: "Enter your email"
        }
    },
    // {
    //     isOptional: true,
    //     inputProps: {
    //         name: "username",
    //         type: "email",
    //         value: user.username || '',
    //         placeholder: "Enter your phone number (optional)"
    //     }
    // },
    {
        label: "Country",
        inputProps: {
            name: "country_id",
            type: "select",
            value: address.country_id || '',
            placeholder: "Select your country",
            options: con,
            decendOp: "states",
            decendIp: "state_id"
        }
    },
    {
        label: "State",
        inputProps: {
            name: "state_id",
            type: "select",
            value: address.state_id || '',
            placeholder: "Select your state",
            options: []
        }
    },
    {
        label: "City",
        inputProps: {
            name: "city",
            type: "text",
            value: address.city || '',
            placeholder: "Enter your city"
        }
    },
    {
        label: "Address",
        inputProps: {
            name: "address",
            type: "text",
            value: address.address || '',
            placeholder: "Enter your address"
        }
    },
    {
        label: "Pincode",
        inputProps: {
            name: "pin_code",
            type: "tel",
            value: address.pin_code || '',
            placeholder: "Enter your pincode"
        }
    },
    {
        isOptional: true,
        label: "Landmark",
        inputProps: {
            name: "landmark",
            type: "text",
            value: address.landmark || '',
            placeholder: "Enter a landmark (optional)"
        }
    },
];

//modal name: UPDATE_PROFILE
const UpdateProfile = ({ master_values, address, dispatch, user_detail }) => {

    //load master values
    useHttp(dispatch, MASTER_VALUES, { url: master_url }, 'master_values');

    if (!master_values.data.countries) {
        if (master_values.fetching) {
            return (
                <div className="modal-wrapper">
                    <CenterLoader />
                </div>
            )
        }
        return null
    }
    return (
        <ModalLayout
            maxWidth={550}
            title="Update Profile"
            children={
                <div className="update-form">
                    <Address
                        inputs={inputs(master_values.data.countries, address, user_detail)}
                    />
                </div>
            }
        />
    )
}

const mapStateToProps = ({ master_values, user }) => ({
    master_values,
    address: user.user_address || {},
    user_detail: user || {},
})

export default connect(mapStateToProps)(UpdateProfile)