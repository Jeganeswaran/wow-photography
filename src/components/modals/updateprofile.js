import React, { useState, useEffect } from 'react'
import Address from '../auth/address';
import { MASTER_VALUES, master_url, profile_url } from '../../redux/actions/constants';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import CenterLoader from './centerloader';
import ModalLayout from './modallayout';
import { updateUser } from '../../redux/actions/user';
import apiInstance from '../../redux/apiInstance';

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
    {
        label: 'Phone Number',
        inputProps: {
            name: "phone_number",
            type: "tel",
            value: user.userprofile ? (user.userprofile.phone_number || '') : '',
            placeholder: "Enter your phone number",
            maxLength: 10,
        }
    },
    {
        label: "Country",
        inputProps: {
            name: "country_id",
            type: "select",
            value: address.country_id || '',
            placeholder: "Select your country",
            options: con
        }
    },
    {
        label: "State",
        inputProps: {
            name: "state",
            type: "text",
            value: address.state || '',
            placeholder: "Enter your state"
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
            type: "text",
            value: address.pin_code || '',
            placeholder: "Enter your pincode",
            maxLength: 6,
        }
    },
    {
        isOptional: true,
        label: "Instagram public url (optional)",
        inputProps: {
            name: "instagram",
            type: "text",
            value: address.instagram || '',
            placeholder: "Enter your instagram public url"
        }
    },
];

//modal name: UPDATE_PROFILE
const UpdateProfile = ({ master_values, address, dispatch, user_detail }) => {


    const [userLoad, setUserLoad] = useState(false);

    //load user
    useEffect(() => {
        let didCancel = false;
        if (!userLoad) {
            apiInstance({
                url: profile_url
            }).then((res) => {
                dispatch(updateUser(res.data));
                if (!didCancel) {
                    setUserLoad(true);
                }
            })
        }

        return () => {
            didCancel = true;
        }

    }, [])

    //load master values
    useHttp(dispatch, MASTER_VALUES, { url: master_url }, 'master_values');

    if (!userLoad || master_values.fetching) {
        return (
            <div className="modal-wrapper">
                <CenterLoader />
            </div>
        )
    }
    if (Array.isArray(master_values.data.countries)) {
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
    return null
}

const mapStateToProps = ({ master_values, user }) => ({
    master_values,
    address: user.user_address || {},
    user_detail: user || {},
})

export default connect(mapStateToProps)(UpdateProfile)