// let nextProjectId = 0;
import { firestore } from "../config/fbConfig";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    firestore
      .collection("projects")
      .add({
        ...project,
        authorName: "Sayumi",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
