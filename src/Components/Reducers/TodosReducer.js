const initialState = [
  { id: 1, description: "Learn about React", isDone: false },
  { id: 2, description: "Meet friend for lunch", isDone: false },
  { id: 3, description: "Build really cool todo app", isDone: false },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: action.id, description: action.todo, isDone: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, description: action.description }
          : todo
      );

    default:
      return state;
  }
};

export default reducer;
