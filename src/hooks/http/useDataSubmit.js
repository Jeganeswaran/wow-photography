import { useEffect, useReducer } from "react"
import dataFetchReducer from "./dataFetchReducer"
import apiInstance, { CancelToken, isCancel } from "../../redux/apiIntance";

const useDataSubmit = (config, succFunc, errFunc ) => {

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
                    ...config.conf,
                    cancelToken: new CancelToken(c => cancel = c)
                });
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
                if (succFunc) {
                    succFunc(res.data)
                }
            } catch (err) {
                if (isCancel(err)) {
                    dispatch({ type: 'FETCH_FAILURE', err });
                } else {
                    dispatch({ type: 'FETCH_FAILURE', err });
                    if (errFunc) {
                        errFunc(err);
                    }
                }
            }
        };

        if(config.isValid){
            fetchData();
        }

        return () => {
            if (cancel) {
                cancel("cancelled by user")
            }
        };
    }, [config.isValid]);

    return state
};

export default useDataSubmit;