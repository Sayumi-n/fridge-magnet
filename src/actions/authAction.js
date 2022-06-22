import { auth } from "firebase/app";
import { datadogRum } from '@datadog/browser-rum';

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    // const getFirebase = getFirebase();
    auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
      datadogRum.setUser({
        email: credentials.email,
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          name: newUser.name,
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
