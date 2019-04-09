import { saveLocalState } from "../../utils/localstorage";
import { USER, _UPDATE_DATA, _CLEAR } from "../actions/constants";
import apiInstance from "../apiInstance";

const loginTypes = [`${USER}${_UPDATE_DATA}`];

const storeUser = store => next => action => {
	if (loginTypes.includes(action.type)) {
		if (!action.error) {
			const user = action.payload;
			console.log(user);
			saveLocalState(user);
			// Alter defaults after instance has been created
			if (user.token) {
				apiInstance.defaults.headers.common['Authorization'] = `Token ${user.token}`;
			}
		}
	} else if (action.type === `${USER}${_CLEAR}`) {
		delete apiInstance.defaults.headers.common['Authorization'];
		localStorage.removeItem('user');
	}
	return next(action);
};

export default storeUser