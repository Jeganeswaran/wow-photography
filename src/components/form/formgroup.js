import React from 'react'
import renderInput from './renderinput';

const FormGroup = ({dispatch, err="", inputProps}) => {
    if(inputProps.type === "hidden"){
        return null;
    }
    const RenderItem = renderInput(inputProps.type);
    return (
        <div className="form-group">
            <RenderItem 
                className="form-control" 
                dispatch={dispatch} 
                {...inputProps} 
            />
            {err && <p className="m-0 ml-1 theme-red f-12">{err}</p> }
        </div>
    )
}

export default FormGroup