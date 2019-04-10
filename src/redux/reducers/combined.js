import { combineReducers } from 'redux'
import * as common from "./common"
import user from "./user"
import my_collection from "./mycollection"

const reducer = combineReducers({
    ...common,
    user,
    my_collection
})

export default reducer