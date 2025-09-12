function TodoReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map(item => item.id === action.payload.id ? { ...item, done: !item.done } : item);
    default:
      return state;
  }
}

export default TodoReducer;
