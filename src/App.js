import { useContext, createContext, useReducer } from 'react';
import './App.css';

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: true }
];
export const TodoContext = createContext();

function ToDoItem(props) {
  const { state, dispatch } = useContext(TodoContext);
  function makeAsDone() {
    dispatch({ type: "TOGGLE_TODO", payload: { id: props.todo.id } });
  }

  return <div className="todo-item">
    <span className={props.todo.done ? "done" : ""} onClick={makeAsDone}>{props.todo.text}</span>
  </div>;
}

function TodoGroup() {
  const { state, dispatch } = useContext(TodoContext);
  return <div>
    {state.map((item, index) => <ToDoItem key={index} todo={item} index={index} />)}
  </div>;
}

export function TodoReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map(item => item.id === action.payload.id ? { ...item, done: !item.done } : item);
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoGroup />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
