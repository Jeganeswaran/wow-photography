import React, { useEffect } from 'react'
import Loader from '../common/loader';
import useDataSubmit from '../../hooks/http/useDataSubmit';

//modal name LOADING_MODAL
const LoadingModal = ({ config, succFunc, errFunc }) => {

    const { setReq } = useDataSubmit(succFunc, errFunc);

    useEffect(() => {
        setReq({ count: 1, config })
    }, [])
    
    return (
        <div className="modal-wrapper">
            <div className="flex-center">
                {/* <div style={{ display: res.fetching ? `block` : `none` }}> */}
                    <Loader />
                {/* </div> */}
            </div>
        </div>
    )
}


export default LoadingModal
