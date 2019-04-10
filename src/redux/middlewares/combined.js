import thunk from "redux-thunk";
import storeUser from "./storeUser"
import httpreq from "./httpreq";

const middlewares = [thunk, httpreq, storeUser];

export default middlewares