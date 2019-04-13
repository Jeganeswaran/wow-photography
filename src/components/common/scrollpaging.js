import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import DynamicList from './dynamiclist';
import LoadMore from './loadmore';
import { clearData, setCache } from '../../redux/actions/http';

const ScrollPaging = ({
    url,
    RenderItem,
    type,
    objName, //assumed as reducer name because it has no depth
    //props from redux
    data,
    fetching,
    dispatch,
    next, count, prev, cached, error,
    //props from redux
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
                dispatch(clearData(type))
            } 
        }

    }, [url]);

    return (
        <Fragment>
            <DynamicList
                RenderItem={RenderItem}
                title={type}
                list={data}
                fetching={fetching}
                {...restProps}
            />
            {
                next && !fetching && !error &&
                <LoadMore
                    listmore={() => {
                        dispatch(setCache(type, false));
                        dispatch({
                            isHttp: true,
                            type,
                            payload: {
                                url: next
                            },
                            objName
                        });
                    }}
                />
            }
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...state[ownProps.objName]
})

export default connect(mapStateToProps)(ScrollPaging)