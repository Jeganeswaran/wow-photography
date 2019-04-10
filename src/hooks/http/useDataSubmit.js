import { useEffect, useReducer, useState } from "react"
import dataFetchReducer from "./dataFetchReducer"
import apiInstance, { CancelToken, isCancel } from "../../redux/apiInstance";
import ajaxerrmsg from "../../utils/ajaxerrmsg";

const useDataSubmit = (succFunc = null, errFunc = null) => {

    //set req
    const [{ count, config}, setReq] = useState({ count: 0, config: null })

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: {}
    });

    useEffect(() => {

        let cancel = null;

        const fetchData = async () => {
            if (cancel) {
                cancel("cancelled by user")
            }
            dispatch({ type: 'FETCH_INIT' });
            try {
                const res = await apiInstance({
                    ...config,
                    cancelToken: new CancelToken(c => cancel = c)
                });
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
                if (succFunc) {
                    succFunc(res.data)
                }
            } catch (err) {
                if (isCancel(err)) {
                    dispatch({ type: 'FETCH_FAILURE', error: true });
                } else {
                    const errMsg = err.response ? ajaxerrmsg(err.response.data) : "Something went wrong";
                    dispatch({ type: 'FETCH_FAILURE', error: errMsg });
                    if (errFunc) {
                        errFunc(errMsg);
                    }
                }
            }
        };

        if (count && config) {
            fetchData();
        }

        return () => {
            if (cancel) {
                cancel("cancelled by user")
            }
        };
    }, [count]);

    return { setReq, res: state, req: { count, config} }
};

export default useDataSubmit;