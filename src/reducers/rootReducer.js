import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import asyncReducer from "./asyncReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  async: asyncReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
