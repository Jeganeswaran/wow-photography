//object form reducer
const multiSelect = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                ids: [action.payload.id, ...state.ids],
                list: [action.payload, ...state.list]
            }
        case "REMOVE":
            return {
                ...state,
                ids: state.ids.filter(x => x !== action.payload.id),
                list: state.list.filter(x => x.id !== action.payload.id)
            }
        case "UPDATE":
            return {
                ...state,
                list: state.list.map(x => {
                    if (x.id === action.id) {
                        return { ...x, ...action.payload }
                    }
                    return x
                })
            }
        case "CLEAR":
            return {
                ids: [],
                list: []
            }
        default:
            return state
    }
}

export default multiSelect