import React, { useEffect } from 'react'
import useDataSubmit from '../../hooks/http/useDataSubmit';
import CenterLoader from './centerloader';
import useLockBodyScroll from "../../hooks/layout/useLockBodyScroll"

//modal name LOADING_MODAL
const LoadingModal = ({ config, succFunc, errFunc }) => {

    const { setReq } = useDataSubmit(succFunc, errFunc);

    useEffect(() => {
        setReq({ count: 1, config })
    }, [])

    useLockBodyScroll();
    
    return (
        <div className="modal-wrapper">
            <CenterLoader />
        </div>
    )
}


export default LoadingModal
