import { createStore, applyMiddleware, compose } from "redux";
// import asyncReducer from "./reducers/asyncReducer";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore })),
    reduxFirestore(fbConfig)
  )
);

export default store;
