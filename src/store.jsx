import { createStore, applyMiddleware, compose } from "redux";
// import asyncReducer from "./reducers/asyncReducer";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

export default store;
