//object form reducer
const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return updateInput(state, action.name, {value: action.value} )
        case "SET_ERROR":
            return updateForm(state, action.name, {err: action.err} )
        case "UPDATE_INPUT":
            return updateInput(state, action.name, action.payload )
        case "UPDATE_FORM":
            return updateForm(state, action.name, action.payload )
        default:
            return state
    }
}

const updateInput = (state, name, update) => state.map(x => {
    if (name === x.inputProps.name) {
        return {
            ...x,
            err: '',
            inputProps: {
                ...x.inputProps,
                ...update
            }
        }
    }
    return x
})

const updateForm = (state, name, update) => state.map(x => {
    if (name === x.inputProps.name) {
        return {
            ...x,
            ...update
        }
    }
    return x
})

export default formReducer