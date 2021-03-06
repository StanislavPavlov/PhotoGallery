import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "../reducers/appReducer";

const reducers = combineReducers({
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

