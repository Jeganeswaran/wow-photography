import thunk from "redux-thunk";
import storeUser from "./storeUser"

let middlewares = [thunk, storeUser];

export default middlewares