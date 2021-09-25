import React, { useState } from 'react'
import List from '../common/list'
import { connect } from 'react-redux'
import { changeMulti, addPhotoSuccess } from '../../redux/actions/user'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import { addToast, closeModal } from '../../redux/actions/common'
import LoadingBtn from '../common/loadingbtn'
import { photos_url } from '../../redux/actions/constants'
import { Link } from 'react-router-dom'

const MultiSubmit = ({
  list,
  categories,
  changeMulti,
  addPhotoSuccess,
  addToast,
  closeModal,
  points,
}) => {
  //terms
  const [terms, setTerms] = useState(false)

  const { setReq, res } = useDataSubmit(
    (response) => {
      addPhotoSuccess(response)
      closeModal()
    },
    (response) => {
      addToast(response, false)
    }
  )

  //handle file input change
  const handleSubmit = () => {
    //check if file size less than 20MB
    if (points < list.length) {
      addToast(`You have only ${points} credits`, false)
      return
    }

    let postData = list.reduce((acc, cur) => {
      return [...acc, { ...cur, photo: cur.id, categories: cur.categories_id }]
    }, [])

    setReq((x) => ({
      ...x,
      count: x.count + 1,
      config: {
        url: photos_url + 'photo_submit/',
        method: 'POST',
        data: postData,
      },
    }))
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-3" style={{ height: `60vh`, overflow: `auto` }}>
          <List
            list={list}
            RenderItem={(photo_data) => {
              const { id, thumbnail, categories_id } = photo_data
              return (
                <div className="col-md-4">
                  <div className="multi-select-img mb-1">
                    <img src={thumbnail} alt={''} />
                    <div className="flex-center">
                      <button
                        className="btn btn-a"
                        onClick={() => {
                          changeMulti('_REMOVE', photo_data)
                        }}
                      >
                        <i className="fas fa-trash color-white" />
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      value={categories_id}
                      className="form-control f-14"
                      onChange={({ target }) => {
                        changeMulti('_UPDATE', {
                          id,
                          data: {
                            categories_id: parseInt(target.value, 10),
                          },
                        })
                      }}
                    >
                      <List
                        RenderItem={({ name, id }) => (
                          <option value={id}>{name}</option>
                        )}
                        title="cats-multi"
                        list={[...categories.data]}
                      />
                    </select>
                  </div>
                </div>
              )
            }}
            title="multi"
          />
        </div>
      </div>
      <div className="">
        <div className="d-flex align-items-center form-group mb-2">
          <input
            type="checkbox"
            id="termsIp"
            checked={terms}
            className="mr-2"
            onChange={() => {
              setTerms((term) => !term)
            }}
          />
          <span className="f-14 d-flex align-items-center">
            I agree to all{' '}
            <Link
              className="theme-red ml-1"
              to="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Terms & Conditions{' '}
            </Link>
          </span>
        </div>
        <p className="f-10 theme-red">
          Note: Categories and photos cannot be changed after submission
        </p>
      </div>
      <LoadingBtn
        disabled={list.length === 0 || !terms}
        fetching={res.fetching}
        className="btn btn-theme float-right pr-4 pl-4"
        onClick={handleSubmit}
        title="Submit"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.multi_select.list,
  points: state.user.userprofile.points || 0,
})

const mapDispatchToProps = {
  changeMulti,
  addPhotoSuccess,
  addToast,
  closeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSubmit)
