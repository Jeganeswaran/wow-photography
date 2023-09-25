const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                fetching: true,
                error: false,
                data: null
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                fetching: false,
                error: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
        case 'FETCH_CLEAR':
            return {
                ...state,
                fetching: false,
                error: false,
                data: null
            };
        default:
            throw new Error();
    }
};

export default dataFetchReducer