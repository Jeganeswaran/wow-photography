import React from 'react'
import Address from '../auth/address';
import { MASTER_VALUES, master_url } from '../../redux/actions/constants';
import useHttp from '../../hooks/http/useHttp';
import { connect } from 'react-redux'
import Loader from '../common/loader';

const inputs = (con, address) => [
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

const UpdatAddress = ({ master_values, address, dispatch }) => {

    //load master values
    useHttp(dispatch, MASTER_VALUES, { url: master_url }, 'master_values');

    if (!master_values.data.countries) {
        if (master_values.fetching) {
            return (
                <div className="flex-center">
                    <Loader width="30px" height="30px" />
                </div>
            )
        }
        return null
    }
    return (
        <div className="pt-2 pb-3 mb-5">
            <Address
                inputs={inputs(master_values.data.countries, address)}
            />
        </div>
    )
}

const mapStateToProps = ({ master_values, user }) => ({
    master_values,
    address: user.user_address || {}
})

export default connect(mapStateToProps)(UpdatAddress)