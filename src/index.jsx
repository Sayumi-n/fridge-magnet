import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
// import fbConfig from "./config/fbConfig";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { datadogRum } from "@datadog/browser-rum";

// Your Datadog RUM configuration
const RUM_APP_ID = process.env.REACT_APP_RUM_APP_ID;
const RUM_CLIENT_TOKEN = process.env.REACT_APP_RUM_CLIENT_TOKEN;

datadogRum.init({
  applicationId: RUM_APP_ID,
  clientToken: RUM_CLIENT_TOKEN,
  site: "datadoghq.com",
  service: "test_login",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sampleRate: 100,
  premiumSampleRate: 100,
  trackInteractions: true,
  defaultPrivacyLevel: "mask-user-input",
});

datadogRum.startSessionReplayRecording();

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};
const rrfProps = {
  firebase,
  // config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div>Loading Fridge Haiku...</div>
      </>
    );
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
