import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import list from "./reducers/listReducer";
import user from "./reducers/userReducer";

export default createStore(
    combineReducers({
        list
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);