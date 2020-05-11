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
    case "TOGGLE_ITEM":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return {
            ...item,
          };
        }),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
      };

    default:
      return state;
  }
};
