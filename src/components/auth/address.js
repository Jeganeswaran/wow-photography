import React, { useReducer } from 'react'
import List from '../common/list'
import formReducer from '../../hooks/form/formReducer'
import { validate, reduceForm } from '../../utils/forms/validation'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import LoadingBtn from '../common/loadingbtn'
import FormGroup from '../form/formgroup'
import { profile_url } from '../../redux/actions/constants'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions/user'
import { addToast, closeModal } from '../../redux/actions/common'

const Address = ({ inputs, dispatch, setTab = null }) => {
  //form state
  const [formstate, formdispatch] = useReducer(formReducer, inputs)

  //data fetching effect
  const { res, setReq } = useDataSubmit(
    (data) => {
      dispatch(updateUser(data))
      dispatch(addToast('Profile Updated'))
      if (typeof setTab === 'function') {
        setTab(2)
      } else {
        dispatch(closeModal())
      }
    },
    (data) => {
      dispatch(addToast(data, false))
    }
  )

  //handle submit
  const handleSubmit = () => {
    const isErr = validate(formstate, formdispatch)
    if (isErr) {
      return
    }
    const data = new FormData()
    const {
      country_id,
      state,
      address,
      city,
      pin_code,
      landmark,
      instagram,
      ...restUser
    } = reduceForm(formstate)
    for (let key in restUser) {
      data.append(key, restUser[key])
    }
    data.append(
      'useraddress',
      JSON.stringify({
        country_id,
        state,
        address,
        city,
        pin_code,
        landmark,
        instagram,
      })
    )
    setReq((x) => ({
      ...x,
      count: x.count + 1,
      config: {
        url: profile_url,
        method: 'POST',
        data,
        crossDomain: true,
        contentType: false,
        processData: true,
      },
    }))
  }

  return (
    <form
      className="w-100"
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <List
        RenderItem={FormGroup}
        list={formstate}
        title={'add-address'}
        dispatch={formdispatch}
      />
      <div>
        <LoadingBtn
          fetching={res.fetching}
          type="submit"
          className="btn btn-theme float-right"
        />
      </div>
    </form>
  )
}

export default connect(null)(Address)
