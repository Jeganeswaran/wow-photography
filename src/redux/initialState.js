import { loadLocalState } from "../utils/localstorage";
import apiInstance from "./apiInstance"

const user = loadLocalState();


//add token to apiInstance
apiInstance.defaults.headers.common['Authorization'] = `Token ${user.token}`;

const initialState = {
    user
};

export default initialState