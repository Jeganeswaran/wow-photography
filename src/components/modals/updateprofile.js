import React from 'react'
import Address from '../auth/address';
import { MASTER_VALUES, master_url } from '../../redux/actions/constants';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import CenterLoader from './centerloader';
import ModalLayout from './modallayout';

const inputs = (con, address, user) => [
    {
        inputProps: {
            name: "first_name",
            type: "text",
            value: user.first_name || '',
            placeholder: "Enter your first name"
        }
    },
    {
        inputProps: {
            name: "last_name",
            type: "text",
            value: user.last_name || '',
            placeholder: "Enter your last name"
        }
    },
    {
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
        inputProps: {
            name: "state_id",
            type: "select",
            value: address.state_id || '',
            placeholder: "Select your state",
            options: []
        }
    },
    {
        inputProps: {
            name: "address",
            type: "text",
            value: address.address || '',
            placeholder: "Enter your address"
        }
    },
    {
        inputProps: {
            name: "city",
            type: "text",
            value: address.city || '',
            placeholder: "Enter your city"
        }
    },
    {
        inputProps: {
            name: "pin_code",
            type: "tel",
            value: address.pin_code || '',
            placeholder: "Enter your pincode"
        }
    },
    {
        isOptional: true,
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
                <Address
                    inputs={inputs(master_values.data.countries, address, user_detail)}
                />
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