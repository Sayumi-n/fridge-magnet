let nextProjectId = 0;

export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", id: nextProjectId++, project });
  };
};
