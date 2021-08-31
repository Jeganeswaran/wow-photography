import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import DynamicList from './dynamiclist';
import { _CLEAR } from "../../redux/actions/constants";

const LoadList = ({
    url,
    RenderItem,
    type,
    objName, //assumed as reducer name because it has no depth
    list,
    fetching,
    dispatch,
    clearList = false,
    ...restProps
}) => {

    //load data
    useEffect(() => {
        
        dispatch({
            isHttp: true,
            type,
            payload: {
                url
            },
            objName
        })

        return () => {
            if(clearList){
                dispatch({ 
                    type: type + _CLEAR
                })
            }
        }

    }, [url]);

    return (
        <DynamicList
            RenderItem={RenderItem}
            title={type}
            list={list}
            fetching={fetching}
            {...restProps}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    list: state[ownProps.objName].data,
    fetching: state[ownProps.objName].fetching
})

export default connect(mapStateToProps)(LoadList)
