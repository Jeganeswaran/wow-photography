import React, { useState, useEffect } from 'react'
import Address from '../auth/address'
import {
  MASTER_VALUES,
  master_url,
  profile_url,
} from '../../redux/actions/constants'
import useHttp from '../../hooks/http/useHttp'
import { connect } from 'react-redux'
import Loader from '../common/loader'
import apiInstance from '../../redux/apiInstance'
import { updateUser } from '../../redux/actions/user'

const inputs = (con, address, email, phone_number) => [
  {
    label: 'Email',
    inputProps: {
      name: 'email',
      type: 'email',
      value: email || '',
      placeholder: 'Enter your email',
      readOnly: true,
    },
  },
  {
    label: 'Phone Number',
    inputProps: {
      name: 'phone_number',
      type: 'tel',
      value: phone_number || '',
      placeholder: 'Enter your phone number',
      maxLength: 10,
    },
  },
  {
    label: 'Country',
    inputProps: {
      name: 'country_id',
      type: 'select',
      value: address.country_id || '',
      placeholder: 'Select your country',
      options: con,
    },
  },
  {
    label: 'State',
    inputProps: {
      name: 'state',
      type: 'text',
      value: address.state || '',
      placeholder: 'Enter your state',
    },
  },
  {
    label: 'City',
    inputProps: {
      name: 'city',
      type: 'text',
      value: address.city || '',
      placeholder: 'Enter your city',
    },
  },
  {
    label: 'Address',
    inputProps: {
      name: 'address',
      type: 'text',
      value: address.address || '',
      placeholder: 'Enter your address',
    },
  },
  {
    label: 'Pincode',
    inputProps: {
      name: 'pin_code',
      type: 'text',
      value: address.pin_code || '',
      placeholder: 'Enter your pincode',
      maxLength: 6,
    },
  },
  {
    isOptional: true,
    label: 'Instagram public url (optional)',
    inputProps: {
      name: 'instagram',
      type: 'text',
      value: address.instagram || '',
      placeholder: 'Enter your instagram public url',
    },
  },
]

const UpdatAddress = ({
  master_values,
  address,
  dispatch,
  setTab,
  email,
  phone_number,
}) => {
  const [userLoad, setUserLoad] = useState(false)

  //load user
  useEffect(() => {
    let didCancel = false
    if (!userLoad) {
      apiInstance({
        url: profile_url,
      }).then((res) => {
        dispatch(updateUser(res.data))
        if (!didCancel) {
          setUserLoad(true)
        }
      })
    }

    return () => {
      didCancel = true
    }
  }, [])

  //load master values
  useHttp(dispatch, MASTER_VALUES, { url: master_url }, 'master_values')

  if (!userLoad || master_values.fetching) {
    return (
      <div className="flex-center">
        <Loader width="30px" height="30px" />
      </div>
    )
  }
  if (Array.isArray(master_values.data.countries)) {
    return (
      <div className="pt-2 pb-3 mb-5">
        <Address
          setTab={setTab}
          inputs={inputs(
            master_values.data.countries,
            address,
            email,
            phone_number
          )}
        />
      </div>
    )
  }

  return null
}

const mapStateToProps = ({ master_values, user }) => ({
  master_values,
  address: user.user_address || {},
  email: user.email || '',
  phone_number: user.userprofile ? user.userprofile.phone_number : '',
})

export default connect(mapStateToProps)(UpdatAddress)
