import React, { useReducer, useEffect } from 'react'
import List from '../common/list';
import formReducer from '../../hooks/form/formReducer';
import dataFetchReducer from '../../hooks/http/dataFetchReducer';
import useCount from "../../hooks/useCount";
import { validate, reduceForm } from '../../utils/forms/validation';
import apiInstance, { CancelToken, isCancel } from "../../redux/apiIntance";
import ajaxerrmsg from '../../utils/ajaxerrmsg';

const RenderForm = ({
    RenderItem, inputs, title,
    config = {}, succFunc, errFunc,
    btnCls = "btn btn-theme btn-block", fromCls = "" }) => {

    //form state    
    const [state, dispatch] = useReducer(formReducer, inputs);

    //counter
    const { count, inc } = useCount(0);

    //data fetching state
    const [submit, asyncDisp] = useReducer(dataFetchReducer, {
        fetching: false,
        error: false,
        data: {}
    });

    //data fetching effect
    useEffect(() => {

        let cancel = null;

        const fetchData = async () => {
            if (cancel) {
                cancel("cancelled by user")
            }
            asyncDisp({ type: 'FETCH_INIT' });
            try {
                const conf = { ...config, data: reduceForm(state) };
                const res = await apiInstance({
                    ...conf,
                    cancelToken: new CancelToken(c => cancel = c)
                });
                asyncDisp({ type: 'FETCH_SUCCESS', payload: res.data });
                if (succFunc) {
                    succFunc(res.data)
                }
            } catch (err) {
                if (isCancel(err)) {
                    asyncDisp({ type: 'FETCH_FAILURE', payload: '' });
                } else {
                    const errMsg = err.response ? ajaxerrmsg(err.response.data) : "Something went wrong";
                    asyncDisp({
                        type: 'FETCH_FAILURE',
                        payload: errMsg
                    });
                    if(errFunc){
                        errFunc(errMsg);
                    }
                }
            }
        };

        if (count) {
            fetchData();
        }

        return () => {
            if (cancel) {
                cancel("cancelled by user")
            }
        };
    }, [count]);


    //handle submit
    const handleSubmit = () => {
        const isErr = validate(state, dispatch);
        if (isErr) {
            return;
        }
        inc();
    };

    return (
        <form
            className={fromCls}
            noValidate
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <List
                RenderItem={RenderItem}
                list={state}
                title={title}
                dispatch={dispatch}
            />
            <button
                disabled={submit.fetching}
                type="submit"
                className={btnCls}
            >
                {submit.fetching ? 'Loading...' : 'Submit'}
            </button>
        </form>
    )
}

export default RenderForm
