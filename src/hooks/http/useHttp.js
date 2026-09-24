import { useEffect } from 'react'

const useHttp = (dispatch, type, payload, objName = "", deps =[]) => {
    
    useEffect(() => {
        dispatch({
            isHttp: true,
            type, 
            payload, 
            objName 
        })
    }, deps);

}

export default useHttp
