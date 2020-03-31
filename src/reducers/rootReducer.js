import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import asyncReducer from "./asyncReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  async: asyncReducer
});

export default rootReducer;
