import React, { useReducer } from 'react'
import List from '../common/list';
import formReducer from '../../hooks/form/formReducer';
import { validate, reduceForm } from '../../utils/forms/validation';
import useDataSubmit from '../../hooks/http/useDataSubmit';
import LoadingBtn from '../common/loadingbtn';
import FormGroup from '../form/formgroup';
import { profile_url } from '../../redux/actions/constants';
// import { connect } from 'react-redux'

const Address = ({ inputs }) => {

    //form state    
    const [state, formdispatch] = useReducer(formReducer, inputs);

    //data fetching effect
    const { res, setReq } = useDataSubmit(
        (data) => {
            console.log(data);
        }, 
        (data) => {
            console.log(data);
        }
    )

    //handle submit
    const handleSubmit = () => {
        const isErr = validate(state, formdispatch);
        if (isErr) {
            return;
        }
        const data = new FormData();
        data.append("useraddress", JSON.stringify(reduceForm(state)));
        setReq(x => ({
            ...x,
            count: x.count + 1,
            config: { 
                url: profile_url,
                method: "POST",
                data,
                crossDomain: true,
                contentType: false,
                processData: true
            }
        }))
    };

    return (
        <form
            noValidate
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <List
                RenderItem={FormGroup}
                list={state}
                title={"add-address"}
                dispatch={formdispatch}
            />
            <LoadingBtn
                fetching={res.fetching}
                type="submit"
                className="btn btn-theme btn-block"
            />
        </form>
    )
}

export default Address
