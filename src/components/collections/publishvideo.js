import React, { useState } from 'react'
import Loadlist from '../common/loadlist'
import {
  MASTER_VALUES,
  videos_url,
  master_url,
} from '../../redux/actions/constants'
import useDataSubmit from '../../hooks/http/useDataSubmit'
import { connect } from 'react-redux'
import LoadingBtn from '../common/loadingbtn'
import { closeModal, addToast } from '../../redux/actions/common'
import { addVideoSuccess } from '../../redux/actions/user'

const PubLishVideo = ({ id, addVideoSuccess, addToast, closeModal }) => {
  const [choosenId, chooseId] = useState(null)

  const { res, setReq } = useDataSubmit(
    (data) => {
      addVideoSuccess()
      closeModal()
      addToast('Video type updated')
    },
    (data) => {
      addToast(data, false)
    }
  )

  return (
    <div>
      <ul className="cat-list">
        <Loadlist
          RenderItem={({ name, id }) => (
            <li
              onClick={() => {
                chooseId(id)
              }}
              className={choosenId === id ? 'cat-active' : 'border'}
            >
              {name}
            </li>
          )}
          url={master_url}
          objName="master_values"
          type={MASTER_VALUES}
        />
      </ul>
      <LoadingBtn
        title="Change Video Type"
        fetching={res.fetching}
        className="btn btn-theme btn-block"
        disabled={!choosenId}
        onClick={() => {
          setReq((x) => ({
            ...x,
            count: x.count + 1,
            config: {
              url: videos_url + id + '/change_category/',
              method: 'POST',
              data: {
                category: choosenId,
              },
            },
          }))
        }}
      />
    </div>
  )
}

const mapStateToProps = ({ master_values }) => ({
  master_values,
})

const mapDispatchToProps = {
  addVideoSuccess,
  addToast,
  closeModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(PubLishVideo)
