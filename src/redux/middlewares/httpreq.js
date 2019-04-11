import apiInstance from "../apiInstance";
import { _FETCHING, _FULFILLED, _REJECTED } from "../actions/constants";
import ajaxerrmsg from "../../utils/ajaxerrmsg";

//common middleware for http requests
//with steps to avoid potential race conditions durin network requests
const httpreq = ({ dispatch, getState }) => next => action => {

    const { isHttp, payload, type, objName, ...rest } = action;

    if (isHttp) {
        //objName depth must be specified with space
        //example 'user collections' -> user.collections
        //try to avoid very deep object location
        //getState() retrun the state
        if (shouldNotFetchData(getState(), objName)) {
            return;
        }
        //payload === http config
        fetchData(payload, type, dispatch, rest);
    } else {
        return next(action);
    }
};

const shouldNotFetchData = (state, name) => {
    if (!name) {
        return false
    }
    //get data
    const data = getData(state, name);
    if (!data) {
        return false
    } else if (data.cached) {
        return true
    } else if (data.fetching) {
        return true
    } else {
        return false
    }
}

const getData = (state, name) => {
    const levels = name.trim().split(" ");
    let depth = state;
    levels.forEach(x => {
        depth = depth[x];
    })
    return depth;
}

const fetchData = async (config, type, dispatch, rest) => {
    dispatch({ type: type + _FETCHING, ...rest });
    try {
        const res = await apiInstance(config);
        dispatch({ type: type + _FULFILLED, payload: res.data, ...rest });
    } catch (err) {
        const errMsg = err.response ? ajaxerrmsg(err.response.data) : 'Something went wrong';
        dispatch({ type: type + _REJECTED, payload: errMsg, ...rest });
    }
}

export default httpreq