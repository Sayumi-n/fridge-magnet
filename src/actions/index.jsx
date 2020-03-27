import WordsApi from "./apis/WordsApi";

export const getWordsRequest = () => {
  return {
    type: "GET_WORDS_REQUEST"
  };
};
export const getWordsSuccess = data => {
  return {
    type: "GET_WORDS_SUCCESS",
    data
  };
};
export const getWordsError = error => {
  return {
    type: "GET_WORDS_ERROR",
    error
  };
};

export const getWords = word => {
  return async dispatch => {
    dispatch(getWordsRequest(word));
    try {
      const response = await WordsApi.get("/words", {
        params: {
          topics: topics,
          max: 150
        }
      });
      return dispatch(getWordsSuccess(response.data));
    } catch (err) {
      return dispatch(getWordsError(err));
    }
  };
};
