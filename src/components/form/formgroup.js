import React from 'react'
import renderInput from './renderinput';

const FormGroup = ({dispatch, err="", label, inputProps}) => {
    if(inputProps.type === "hidden"){
        return null;
    }
    const RenderItem = renderInput(inputProps.type);
    return (
        <div className="form-group relative">
            {label && <label className="f-14" for="exampleInputEmail1">{label}</label>}
            <RenderItem 
                className="form-control" 
                dispatch={dispatch} 
                {...inputProps} 
            />
            {err && <p className="m-0 err-msg theme-red f-12">{err}</p> }
        </div>
    )
}

export default FormGroup