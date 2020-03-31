import store from "../store";

export const fetch_post = () => {
  return {
    type: "FETCH_USER"
  };
};

export const receive_post = post => {
  return {
    type: "FETCHED_USER",
    data: post
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

export const thunk_action_creator = userInput => {
  const term = userInput.replace(/\s/g, "");
  store.dispatch(fetch_post());
  return function(dispatch, getState) {
    return fetch(
      `https://api.datamuse.com/words?topics=${term},verb,pronoun&max=125`
    )
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_post(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};
