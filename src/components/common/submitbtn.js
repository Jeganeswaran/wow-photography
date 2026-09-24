import React from 'react'
import LoadingBtn from './loadingbtn';
import useDataSubmit from '../../hooks/http/useDataSubmit';
import { connect } from 'react-redux'
import { addToast } from '../../redux/actions/common';

const SubmitBtn = ({ title, config, dispatch, success = null, ...restProps }) => {

    const { res, setReq } = useDataSubmit(
        success,
        (data) => dispatch(addToast(data, false))
    );

    return (
        <LoadingBtn
            fetching={res.fetching}
            title={title}
            onClick={() => {
                setReq(x => ({
                    ...x,
                    count: x.count + 1,
                    config
                }))
            }}
            {...restProps}
        />
    )
}

export default connect(null)(SubmitBtn)
