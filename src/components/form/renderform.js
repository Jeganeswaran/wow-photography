import React, { useReducer } from 'react'
import List from '../common/list';
import formReducer from '../../hooks/form/formReducer';
import { validate, reduceForm } from '../../utils/forms/validation';
import useDataSubmit from '../../hooks/http/useDataSubmit';
import LoadingBtn from '../common/loadingbtn';

const RenderForm = ({
    RenderItem, inputs, title,
    config, succFunc = null, errFunc = null,
    btnCls = "btn btn-theme btn-block", fromCls = "" }) => {

    //form state    
    const [state, dispatch] = useReducer(formReducer, inputs);

    //data fetching effect
    const { res, setReq } = useDataSubmit(succFunc, errFunc)

    //handle submit
    const handleSubmit = () => {
        const isErr = validate(state, dispatch);
        if (isErr) {
            return;
        }
        setReq(x => ({
            ...x,
            count: x.count + 1,
            config: { ...config, data: reduceForm(state) }
        }))
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
            <LoadingBtn
                fetching={res.fetching}
                type="submit"
                className={btnCls}
            />
        </form>
    )
}

export default RenderForm
