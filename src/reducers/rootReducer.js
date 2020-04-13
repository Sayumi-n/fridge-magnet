import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import asyncReducer from "./asyncReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  async: asyncReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
