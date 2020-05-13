import store from "../store";

export const fetch_words = () => {
  return {
    type: "FETCH_WORDS",
  };
};

export const receive_words = (post) => {
  return {
    type: "FETCHED_WORDS",
    data: post,
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR",
  };
};

export const thunk_action_creator = (userInput) => {
  const term = userInput.replace(/\s/g, "");
  store.dispatch(fetch_words());
  return function (dispatch, getState) {
    return fetch(`https://api.datamuse.com/words?topics=${term}&max=125`)
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receive_words(data));
      })
      .catch((err) => dispatch(receive_error(err)));
  };
};
