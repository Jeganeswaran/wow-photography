const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                fetching: true,
                error: false
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
        default:
            throw new Error();
    }
};

export default dataFetchReducer