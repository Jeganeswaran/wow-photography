import { combineReducers } from 'redux'
import * as common from "./common"

const reducer = combineReducers({
    ...common
})

export default reducer