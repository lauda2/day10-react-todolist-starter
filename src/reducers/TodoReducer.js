function TodoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            return state.map(item => item.id === action.payload.id ? { ...item, done: !item.done } : item);
        case "ADD_TODO":
            return [...state, action.payload];
        case "REMOVE_TODO":
            return state.filter(item => item.id !== action.payload.id);
        case "SET_TODOS":
            return action.payload;
        default:
            return state;
    }
}

export default TodoReducer;
