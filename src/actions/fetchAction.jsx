import store from "../store";

export const fetchWords = () => {
  return {
    type: "FETCH_WORDS"
  };
};
export const receiveWords = words => {
  return {
    type: "FETCHED_WORDS",
    data: words
  };
};

export const receiveError = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

export const thunkActionCreator = userInput => {
  const term = userInput.replace(/\s/g, "");
  store.dispatch(fetchWords());
  return function(dispatch, getState) {
    return fetch(`https://api.datamuse.com/words?topics=${term},verb&max=125`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("Try with different noun!");
        } else dispatch(receiveWords(data));
      })
      .catch(error => dispatch(receiveError(error)));
  };
};
