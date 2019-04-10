import { useEffect, useReducer } from "react"
import dataFetchReducer from "./dataFetchReducer"
import apiInstance, { CancelToken, isCancel } from "../../redux/apiInstance";
import ajaxerrmsg from "../../utils/ajaxerrmsg";

const useDataSubmit = ({ count = 0 , config = null}, succFunc = null, errFunc = null) => {

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: {}
    });

    console.log(count);

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

    return state
};

export default useDataSubmit;