const initState = {
  projects: [
    { id: "1", title: "help me find a peach" },
    { id: "2", title: "collect all gold" },
    { id: "3", title: "help me find a peach" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
