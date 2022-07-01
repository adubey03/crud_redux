const reducer = (state = [], actions) => {
  switch (actions.type) {
    case "ADD":
      return [...state, actions.data];
    case "UPDATE":
      state[actions.index] = actions.data;
      return [...state];
    case "DELETE":
      return [...state.filter((_, index) => index !== actions.data)];
    default:
      return [...state];
  }
};

export default reducer;
