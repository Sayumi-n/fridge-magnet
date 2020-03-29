import { createStore, applyMiddleware } from "redux";
import asyncReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(asyncReducers, applyMiddleware(thunk));

export default store;
