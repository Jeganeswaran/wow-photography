import { compose, applyMiddleware, createStore } from "redux"
import middlewares from "./middlewares/combined";
import reducer from "./reducers/combined";
import initialState from "./initialState";

const composeEnhancers =
    typeof window === 'object' &&
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

const store = createStore(reducer, initialState, enhancer);

export default store;