import React from 'react'
import RenderForm from '../form/renderform'
import FormGroup from '../form/formgroup'
import { register_url } from '../../redux/actions/constants'
import { addToast, closeModal, openModal } from '../../redux/actions/common'
import { updateUser } from '../../redux/actions/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getValByName } from '../../utils/forms/validation'

const inputs = [
  {
    inputProps: {
      name: 'first_name',
      type: 'text',
      value: '',
      placeholder: 'Enter your First Name',
    },
  },
  {
    inputProps: {
      name: 'last_name',
      type: 'text',
      value: '',
      placeholder: 'Enter your Last Name',
    },
  },
  {
    inputProps: {
      name: 'email',
      type: 'email',
      value: '',
      placeholder: 'Enter your Email',
    },
  },
  {
    customValid: (list, value) => {
      const pwd = getValByName(list, 'email')
      if (pwd === value) {
        return ''
      }
      return 'Emails do not match'
    },
    reduceTo: () => ({}),
    inputProps: {
      name: 're-email',
      type: 'email',
      value: '',
      placeholder: 'Re-enter your Email',
    },
  },
  {
    inputProps: {
      name: 'password',
      type: 'password',
      value: '',
      placeholder: 'Enter your Password',
    },
  },
  {
    customValid: (list, value) => {
      const pwd = getValByName(list, 'password')
      if (pwd === value) {
        return ''
      }
      return 'Passwords do not match'
    },
    reduceTo: () => ({}),
    inputProps: {
      name: 're-password',
      type: 'password',
      value: '',
      placeholder: 'Re-enter your Password',
    },
  },
]

const SignUpForm = ({ addToast, closeModal, openModal }) => {
  return (
    <RenderForm
      RenderItem={FormGroup}
      inputs={inputs}
      title="signup-form"
      config={{
        url: register_url,
        method: 'POST',
      }}
      succFunc={() => {
        addToast(
          'Thank you for signing up. Check your email for activation link. If not received, kindly check your spam folder.',
          true,
          10000
        )

        closeModal()
        openModal('USER_NOTIFY', {title:"Login Notification", content:"Thank you for signing up. Check your email for activation link. If not received, kindly check your spam folder."})
      }}
      errFunc={(data) => {
        addToast(data, false)
      }}
    />
  )
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  addToast,
  closeModal,
  updateUser,
  openModal,
}

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm))
