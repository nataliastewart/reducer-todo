export const initialState = {
  todos: [
    {
      name: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      name: "Study Redux",
      completed: false,
      id: 3892987590,
    },
    {
      name: "Review Training Kit",
      completed: false,
      id: 3892987100,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            name: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    default:
      return state;
  }
};
